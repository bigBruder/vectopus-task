import { illustrationList } from "@/pages/api/hello"

export const IllustartionCard = ({item, index}) => {
  console.log('IllustrationList===>', illustrationList)
  return (
    <div style={{
      height: 555,
      width: 347,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 24,
    }}>
      <div style={{
        height: 28,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
      }}>
        <span style={{
          fontFamily: 'poppins',
          fontSize: 20,
          color: '#000',
          fontWeight: 800,
        }}>
          {item?.title}
        </span>
        <span style={{
          fontFamily: 'poppins',
          fontSize: 16,
          color: '#000',
          fontWeight: 400,
        }}>
          {item?.likes}
        </span>
      </div>
      <div style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 40px)',
        gridTemplateRows: 'repeat(3, 40px)',
        gridGap: '24px',
        // gridRowGap: '10x',
        // gridColumnGap: '2px',
      }}>
        <div style={{
            width: 300,
            height: 463,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center,'
          }}>
            <div>
              <img class="inline-block" src={illustrationList[index]?.urlBig}  style={{
                width: 300,
                height: 300,
              }}/>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <img class="inline-block" src={illustrationList[index]?.urlSmallFirst}  style={{
                width: 150,
                height: 150,
              }}/>
              <img class="inline-block" src={illustrationList[index]?.urlSmallSecond}  style={{
                width: 150,
                height: 150,
              }}/>
            </div>
          </div>
      </div>
    </div>
  )
}