import "tailwindcss/tailwind.css";
import { GoogleFonts } from "next-google-fonts";
import { SideBlock } from "./SideBlock";
import { useState } from "react";

export const DreamIlustration = () => {

  return (
    <div class="flex flex-col" style={{width: '100%', paddingLeft: 30, paddingRight: 30, backgroundColor: 'white', position: 'relative',}}>
    <div  class="flex flex-row" style={{width: '75%'}}>
      <div style={{width: '60%'}}>
        <h2 style={{
        fontFamily: 'poppins',
        fontSize: 48,
        marginBottom: 24,
        fontWeight: 'bold'
      }}>
        Dream illustrations
      </h2>
      <h3
      style={{
        fontFamily: 'poppins',
        fontSize: 32,
        marginBottom: 24,
        fontWeight: 'semi-bold'
      }}
      >
        89 Vector illustrations
      </h3>
      <div style={{display: 'flex', justifyContent: 'flex-start',}}>
        <div class=" w-42 h-24 flex justify-center items-center" 
        style={{
          backgroundColor: '#ffd00f',
          height: 24,
          width: 42,
          borderRadius: 10,
        }}>
          <span style={{
            fontFamily: 'poppins',
            fontSize: 12,
            fontWeight: 'bold'
          }}>
            SVG
          </span>
        </div>
        <div class=" w-42 h-24 flex justify-center items-center" 
          style={{
            backgroundColor: '#a9d3a0',
            height: 24,
            width: 42,
            borderRadius: 10,
            marginLeft: 10
          }}>
            <span style={{
              fontFamily: 'poppins',
              fontSize: 12,
              fontWeight: 'bold'
            }}>
              PNG
          </span>
        </div>
        <div 
        class="h-24  flex space-x-2 items-center"
        style={{
           height: 24,
           marginLeft: 10
        }}
        >
          <img class="inline-block" src="https://beta.vectopus.com/images/brush-icon.svg" />
          <span
          style={{
              fontFamily: 'poppins',
              fontSize: 14,
            }}
          >
            Flat style
          </span>
        </div>
        <div 
          class=" w-42 h-24 flex space-x-2 items-center"
          style={{
           height: 24,
           marginLeft: 10
        }}
        >
          <img class="inline-block" src="https://beta.vectopus.com/images/vector-icon.svg" />
          <span
            style={{
              fontFamily: 'poppins',
              fontSize: 14,
            }}
          >
            Vector
          </span>
        </div>
      </div>
      <div style={{ marginTop: 24}}>
        <span
        style={{
              fontFamily: 'poppins',
              fontSize: 20,
            }}
        >
          Artistic, simplified and meaningful. This is what we aimed for while drawing these illustrations, the over all look and feel is flat but when you go into the details you’ll notice that the characters and scenes are illustrated using outlines and negative space. This pack took a lot of time and effort to create ✨
        </span>
      </div>
      <div
      style={{
       marginTop: 24
      }}
      >
        <span
        style={{
              fontFamily: 'poppins',
              fontSize: 16,
              marginTop: 24
            }}
        >
          Dream illustrations is your go to pack if you need pictograms that will breath life into your designs. Every scene is created using 2 primary colors and 1 accent color for background, feel free to change the accent color to fit any design you have or just remove the geometrical shapes containing the illustrations to emphasis the negative space.
        </span>
      </div>
      <div
      style={{
         marginTop: 24
      }}
      >
        <span
        style={{
              fontFamily: 'poppins',
              fontSize: 16,
              marginTop: 24
            }}
        >
          Dream illustrations is your go to pack if you need pictograms that will breath life into your designs. Every scene is created using 2 primary colors and 1 accent color for background, feel free to change the accent color to fit any design you have or just remove the geometrical shapes containing the illustrations to emphasis the negative space.
        </span>
      </div>
      </div>
        <img class="inline-block" src="https://beta.vectopus.com/images/order-shipping-package.png"  style={{
          width: 500,
          height: 500,
        }}/>
    </div>
    <div style={{display: "flex", justifyContent: 'space-between', paddingTop: 40, width:'75%'}}>
      <div style={{overflow: 'hidden', width: '48%',  borderRadius: '8%'}}>
       <img class="inline-block" src="https://beta.vectopus.com/images/global-issue.png"  style={{
        }}/>
    </div>
      <div style={{overflow: 'hidden', borderRadius: '8%', width: '48%' }}>
       <img class="inline-block" src="https://beta.vectopus.com/images/task-managment.png"  style={{
        }}/>
    </div>
    <div  
      style={{width: '25%', height: 800, backgroundColor: '', right: 0, top: 0, position: "absolute", zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}
    >
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
      <button style={{width: 350, height: 68, backgroundColor: '#3c8cf3', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{display: 'flex'}}>
          <img class="inline-block" src="https://beta.vectopus.com/images/open-lock-unlocked-icon.svg" />
          <span
          style={{
              fontFamily: 'poppins',
              fontSize: 20,
              color: 'white',
              fontWeight: 600,
              marginLeft: 15,
            }}
          >
            Ultimate access download
          </span>
        </div>
      </button>
      <div style={{
        width: 350, 
        height: 250, 
        backgroundColor: '#eaf5e7', 
        borderRadius: 10,
      }}>
        <div style={{marginTop: 28, marginLeft: 28, marginRight: 28, marginBottom: 16}}>
        <span style={{
          color: '#000', 
          fontFamily: 'poppins', 
          fontWeight: 800,
          fontSize: 20,

        }}>
          89 Illustrations
        </span>
        <div style={{
          display: 'flex',
          marginTop: 15,
          marginBottom: 15,
        }}>
          <span style={{
            color: '#000', 
            fontFamily: 'poppins', 
            fontWeight: 400,
            fontSize: 18,
          }}>
            By
          </span>
          <img class="inline-block" src="https://beta.vectopus.com/images/collection-by-icon.svg" style={{marginLeft: 10, marginRight: 10}}/>
          <span
          style={{
            color: '#000', 
            fontFamily: 'poppins', 
            fontWeight: 400,
            fontSize: 18,
            textDecoration: 'underline'
          }}
          >
            Getillustrations
          </span>
        </div>
        <span style={{
          color: '#6b7280', 
          fontFamily: 'poppins', 
          fontWeight: 600,
          fontSize: 14,
        }}>Compatible with</span>
        <div style={{width: '80%', marginBottom: 15}}>
          <span style={{
          color: '#000', 
          fontFamily: 'poppins', 
          fontWeight: 400,
          fontSize: 14,
        }}>Figma, Sketch, illustrator, Sketch, Iconjar</span>
        </div>
        <span style={{
          color: '#000', 
          fontFamily: 'poppins', 
          fontWeight: 400,
          fontSize: 12,
        }}>Commercial usage license - <span style={{textDecoration: 'underline'}}>License types</span></span>
        </div>
      </div>
      <div style={{
        width: 350, 
        height: 350, 
        backgroundColor: '#fffae5', 
        borderRadius: 10,
      }}>
        <div style={{marginTop: 28, marginLeft: 28, marginRight: 28, marginBottom: 16}}>
        <span style={{
          color: '#000', 
          fontFamily: 'poppins', 
          fontWeight: 800,
          fontSize: 20,

        }}>
          Need custom design?
        </span>
        <div style={{
          display: 'flex',
          marginTop: 15,
          marginBottom: 15,
        }}>
          <span style={{
            color: '#000', 
            fontFamily: 'poppins', 
            fontWeight: 400,
            fontSize: 18,
          }}>
            We`re ready to cuaomize this product or create exclusive custom designs tailored to your buisness.
          </span>
        </div>
        <span style={{
          color: '#000', 
          fontFamily: 'poppins', 
          fontWeight: 300,
          fontSize: 14,
          fontStyle: 'italic'
        }}>Lighting fast and made from scratch.</span>
        <button style={{width: '100%', height: 68, backgroundColor: '#ffd00f', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <span
          style={{
              fontFamily: 'poppins',
              fontSize: 16,
              color: '#000',
              fontWeight: 600,
            }}
          >
            Custom design services
          </span>
        </div>
      </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}