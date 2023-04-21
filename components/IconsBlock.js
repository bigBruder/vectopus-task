import { IconsCard } from "./IconsCard"
import { IllustartionCard } from "./IllustrationCard";
const titleList = [
  {title: 'Roundies', likes: 2300},
  {title: 'Flat icons vol.5', likes: 1500},
  {title: 'Bold line', likes: 1000},
  {title: 'Doodle', likes: 1500},
];

const illustrationList = [
  {title: 'Essential', likes: 300},
  {title: 'Simple', likes: 300},
  {title: '3D Clay Mascot', likes: 300},
  {title: 'Crayon', likes: 300},
]

export const IconsBlock = () => {
  return (
    <div style={{
      width: '100%',
      paddingTop: 100,
      height: 1304,
      backgroundColor: 'white'
    }}>
      <div style={{
        height: 1204,
        width: '100%',
        backgroundColor: '#f4f4f4',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
      }}>
        <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: 40,
          marginBottom: 36,
        }}
        >
          <span
          style={{
            fontFamily: 'poppins',
            fontSize: 36,
            color: '#000',
            fontWeight: 800,
            marginRight: 12,
          }}
          >
            Icons to match
          </span>
          <span class="fw-medium" style={{
            height: 50, 
            width: 20,
            fontFamily: 'poppins',
            fontSize: 36,
            color: '#000',
            fontWeight: 800,
          }}>{'>'}</span>
        </div>

        <div style={{
          width: '100%',
          height: 280,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {titleList.map((title) => (
            <IconsCard item={title} />
          ))}
        </div>
        <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: 40,
          marginBottom: 36,
          marginTop: 80,
        }}
        >
          <span
          style={{
            fontFamily: 'poppins',
            fontSize: 36,
            color: '#000',
            fontWeight: 800,
            marginRight: 12,
          }}
          >
            Same style illustrations
          </span>
          <span class="fw-medium" style={{
            height: 50, 
            width: 20,
            fontFamily: 'poppins',
            fontSize: 36,
            color: '#000',
            fontWeight: 800,
          }}>{'>'}</span>
        </div>

        <div style={{
          width: '100%',
          height: 280,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 180,
        }}>
          {illustrationList.map((title, index) => (
            <IllustartionCard item={title} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}