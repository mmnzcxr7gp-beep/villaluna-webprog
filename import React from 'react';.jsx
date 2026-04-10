import React from 'react';
import './App.css';
 
function App() {
  const coverStyle = {
    height: 140,
    background: 'linear-gradient(135deg,#4b6cb7,#182848)',
    borderRadius: 6,
    position: 'relative',
    marginBottom: 60,
  };
  const avatarStyle = {
    width: 120,
    height: 120,
    borderRadius: '50%',
    border: '6px solid white',
    position: 'absolute',
    left: 24,
    bottom: -60,
    background: '#ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    color: '#666',
  };
  const btnStyle = {
    padding: '8px 14px',
    marginRight: 8,
    borderRadius: 6,
    border: 'none',
    cursor: 'pointer',
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{marginBottom:16}}>Welcome to My React App!</h1>
        <div style={{width: '100%', maxWidth: 700, textAlign: 'left'}}>
          <div style={coverStyle}>
            <div
              style={avatarStyle}
              role="img"
              aria-label="Profile photo of Sam Irian Villaluna"
              title="Sam Irian Villaluna"
            >
              SIV
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <div>
              <h2 style={{margin: 0}}>Sam Irian Villaluna</h2>
              <div style={{color: '#666', marginTop: 4}}>
                <a href="#" style={{color:'#666', textDecoration:'none'}}>@samirian.villaluna</a>
              </div>
              <p style={{marginTop: 8, color: '#333'}}>
                Frontend developer · Passionate about clean, accessible UI · Manila, PH
              </p>
            </div>
            <div>
              <button type="button" style={{...btnStyle, background:'#1877f2', color:'white'}}>Add Friend</button>
              <button type="button" style={{...btnStyle, background:'#e4e6eb'}}>Message</button>
            </div>
          </div>

          <div style={{display:'flex', gap:24, marginTop:18, color:'#444'}}>
            <div><strong>120</strong><div style={{fontSize:12,color:'#666'}}>Friends</div></div>
            <div><strong>58</strong><div style={{fontSize:12,color:'#666'}}>Posts</div></div>
            <div><strong>342</strong><div style={{fontSize:12,color:'#666'}}>Followers</div></div>
          </div>

          <hr style={{margin:'18px 0', borderColor:'#eee'}} />

          <div style={{background:'#fff', padding:16, borderRadius:8, boxShadow:'0 1px 2px rgba(0,0,0,0.05)'}}>
            <div style={{fontWeight:600}}>Sample post</div>
            <div style={{color:'#555', marginTop:8}}>
              Hello! I'm Sam Irian Villaluna — building accessible web experiences. 🚀
            </div>
            <div style={{marginTop:10, color:'#888', fontSize:13}}>2 hrs · Public</div>
          </div>
        </div>
      </header>
    </div>
  );
}
 
export default App;