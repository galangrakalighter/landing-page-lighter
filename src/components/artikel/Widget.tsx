import React, { useState, useEffect, useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const WpSidebar: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [videoId, setVideoId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null); // Ref untuk memantau klik dropdown

  useEffect(() => {
    fetch('https://article.lightermediagroup.com/wp-json/mywidget/v1/data')
      .then((res) => res.json())
      .then((data) => {
        if (data.html) {
          let content = data.html;

          const ytRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
          const match = content.match(ytRegex);

          if (match && match[1]) {
            setVideoId(match[1]);
            content = content.replace(/<video[\s\S]*?<\/video>/g, '');
            content = content.replace(/(https?:\/\/[^\s"<]+)/g, '');
          }
          
          setHtmlContent(content);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  // FIX: Menangani perubahan pada dropdown (Archives)
  useEffect(() => {
    if (!loading && containerRef.current) {
      const handleSelectChange = (e: Event) => {
        const target = e.target as HTMLSelectElement;
        // WordPress biasanya menaruh URL tujuan di value option
        if (target && target.tagName === 'SELECT' && target.value) {
          if (target.value !== "" && target.value !== "-1") {
            window.location.href = target.value; // Redirect ke halaman archive
          }
        }
      };

      const container = containerRef.current;
      container.addEventListener('change', handleSelectChange);
      
      return () => {
        container.removeEventListener('change', handleSelectChange);
      };
    }
  }, [loading, htmlContent]);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  if (loading) {
    return <div className="p-5 text-gray-500 text-[10px] animate-pulse">LOADING SIDEBAR...</div>;
  }

  return (
    <div className="wp-sidebar-container w-full space-y-6 bg-transparent text-left px-4">

      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-[#c72727]" /> {/* Garis Merah Vertikal */}
        <h2 className="text-xl font-black uppercase tracking-tighter font-[Arial,Helvetica,sans-serif]">
            Archive
        </h2>
        </div>

      {/* 2. BAGIAN PLAYER */}
      {videoId && (
        <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-black shadow-2xl">
          <YouTube 
            videoId={videoId} 
            opts={opts} 
            onReady={onPlayerReady}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      )}

    </div>
  );
};

export default WpSidebar;