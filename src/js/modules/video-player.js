import 'core-js/es/symbol';

const videoPlayer = () =>
{
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    /* setTimeout(() =>
    {
        const player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: 'ZzoyPEzvtlc',
            playerVars: {
                'modestbranding': 1,
            }
        });
    }, 350); */

    function defPlayerLoad()
    {
        const videoPlayer = document.querySelector('.video-player');

        if(videoPlayer.getBoundingClientRect().top < (window.innerHeight + window.scrollY) &&
        videoPlayer.classList.contains('lazy-load'))
        {
            const player = new YT.Player('player', {
                height: '100%',
                width: '100%',
                videoId: 'ZzoyPEzvtlc',
                playerVars: {
                    'modestbranding': 1,
                }
            });
            videoPlayer.classList.remove('lazy-load');

            window.removeEventListener("scroll", defPlayerLoad);
            console.log('aahj');
        }
    }
    window.addEventListener("scroll", defPlayerLoad);
};
export default videoPlayer;