import React from 'react';
import "../styles/code.scss";


const CodePenEmbed = () => {
  return (
    <div className='iframes'>
        <iframe
          height="800"
          style={{ width: '100%' }}
          scrolling="no"
          title="My CodePen Example"
          src="https://codepen.io/keshaaa/embed/wvaZEar?height=800&theme-id=default&default-tab=css,result"
          frameBorder="no"
          loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        >
          See the Pen <a href='https://codepen.io/keshaaa/pen/wvaZEar'>My CodePen Example</a> by Your Name (<a href='https://codepen.io/keshaaa'>@your-username</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>

        <iframe   height="800"  style={{ width: '100%' }}
          scrolling="no" 
          title="Big slider" 
          src="https://codepen.io/keshaaa/embed/povNjJE?default-tab=html%2Cresult" 
          frameborder="no" loading="lazy" 
          allowtransparency="true" 
          allowfullscreen="true">
            See the Pen <a href="https://codepen.io/keshaaa/pen/povNjJE">
            Big slider</a> by Дама с собачкой (<a href="https://codepen.io/keshaaa">@keshaaa</a>)
            on <a href="https://codepen.io">CodePen</a>.
        </iframe>
    </div>
  );
};

export default CodePenEmbed;