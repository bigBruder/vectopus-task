import { useState } from 'react';
import ToggleSwitch from 'react-toggle-switch';
import { imgList } from '@/pages/api/hello';

export const SearchIcons = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(pev => !pev);
  };

  return (
    <div style={{backgroundColor: 'white'}}>
      <div style={{width: '100%', paddingLeft: 30, paddingRight: 30, paddingTop: 30, display: 'flex', justifyContent: 'space-between', backgroundColor: 'white'}}>
      <div style={{
        width: '75%', 
        borderBottomColor: '#000', 
        borderBottomWidth: 3, 
        borderBottomStyle: 'solid',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <span style={{
        fontSize: 20,
        fontFamily: 'poppins',
        color: '#000',
        fontWeight: 'semi-bold',
      }}> People  Tech   Medical   Nature <span style={{fontStyle: 'italic'}}>More...</span></span>
      <div style={{width: 110, height: 36, backgroundColor: '#deefdb', display: 'flex', borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
      <span style={{color: '#000', fontWeight: 800, marginRight: 10, fontSize: 14, fontFamily: 'poppins',}}>
        Free
      </span>
      <ToggleSwitch
        checked={checked}
        onClick={handleChange}
        className={`${
          checked ? 'bg-indigo-600' : 'bg-gray-400'
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span className="sr-only">Switch</span>
        <span
          className={`${
            checked ? 'translate-x-6' : 'translate-x-0'
          } inline-block w-6 h-6 transform bg-white rounded-full translate-y-0.5`}
          style={{backgroundColor: '#a9d3a0'}}
        />
      </ToggleSwitch>
      </div>
      </div>
        <button style={{width: 350, height: 68, backgroundColor: '#000000', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{display: 'flex'}}>
          <img class="inline-block" src="https://beta.vectopus.com/images/folder-download-icon.svg" />
          <span
          style={{
              fontFamily: 'poppins',
              fontSize: 20,
              color: 'white',
              fontWeight: 600,
              marginLeft: 15,
            }}
          >
            Download $65 / 40<span style={{fontWeight: 200, fontSize: 10,}}> Credits</span>
          </span>
        </div>
      </button>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', paddingLeft: 30, paddingRight: 30, paddingTop: 30 }}>
      {
        imgList.map((img, index) => (
          <div key={index} style={{marginBottom: 15, marginRight: 15}}>
            <img class="inline-block" src={img?.url} />
          </div>
        ))
      }
    </div>
    <div style={{height: 250, display: 'flex', justifyContent: 'flex-end', paddingLeft: 30, paddingRight: 30, paddingTop: 30 }}>
      <div style={{ width: '40%', height: 184, backgroundColor: '#000', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 92, borderBottomLeftRadius: 92, position: 'relative'}}>
        <h3 style={{
            position: 'absolute',
            fontFamily: 'poppins',
            fontSize: 150,
            color: '#F6F6F6',
            fontWeight: 400,
            marginTop: 10,
            top: -15, 
            left: -850
          }}>Pro</h3>
        <div style={{position: 'absolute', top: 40, left: -550}}>
          <img class="inline-block" src='https://beta.vectopus.com/images/become-pro-prefix.svg' style={{position: 'absolute', top: -20, left: 160}} />
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span style={{
              fontFamily: 'poppins',
              fontSize: 24,
              color: '#000',
              fontWeight: 400,
              marginTop: 10,
              textAlign: 'right'
              }}>Become Pro with</span>
            <span
            style={{
              fontFamily: 'poppins',
              fontSize: 36,
              color: '#000',
              fontWeight: 800,
              marginTop: 10,
              textAlign: 'right'
              }}
            >Ultimate accses pass</span>
            <span
            style={{
              fontFamily: 'poppins',
              fontSize: 12,
              color: '#000',
              fontWeight: 400,
              marginTop: 10,
              fontStyle: 'italic',
              textDecoration: 'underline',
              textAlign: 'right'
              }}
            >Compare plans</span>
          </div>
      </div>
        <img class="inline-block" src='https://beta.vectopus.com/images/options-tag-arrow.svg' style={{position: 'absolute', top: 0, left: -150}} />
        <div style={{display: 'flex', position: 'absolute', top: 30, left: '20%'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <span style={{
              fontFamily: 'poppins',
              fontSize: 12,
              color: 'white',
              fontWeight: 400,
              marginTop: 10,
              }}>Get everything</span>
            <span
            style={{
              fontFamily: 'poppins',
              fontSize: 30,
              color: 'white',
              fontWeight: 800,
              marginTop: 10,
              }}
            >Subscribe</span>
            <span
            style={{
              fontFamily: 'poppins',
              fontSize: 12,
              color: '#4B5563',
              fontWeight: 400,
              marginTop: 10,
              }}
            >Plants starting from $9 per month</span>
          </div>
          <img class="inline-block" src='https://beta.vectopus.com/images/options-tag-divider.svg' />
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <span style={{
              fontFamily: 'poppins',
              fontSize: 12,
              color: 'white',
              fontWeight: 400,
              marginTop: 10,
              }}>Pay as you go</span>
            <span
            style={{
              fontFamily: 'poppins',
              fontSize: 30,
              color: 'white',
              fontWeight: 800,
              marginTop: 10,
              }}
            >Credit</span>
            <span
            style={{
              fontFamily: 'poppins',
              fontSize: 12,
              color: '#4B5563',
              fontWeight: 400,
              marginTop: 10,
              }}
            >Lower then 0,02 Cents/download</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
