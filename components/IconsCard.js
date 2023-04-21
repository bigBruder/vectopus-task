import { iconsList } from "@/pages/api/hello"

export const IconsCard = ({item}) => {
  return (
    <div style={{
      height: 261,
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
        {iconsList.map((icon) => (
          <img class="inline-block" src={icon?.url}  style={{
            width: 40,
            height: 40,
          }}/>
        ))}
      </div>
    </div>
  )
}