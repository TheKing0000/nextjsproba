import Axios from "axios";
const CoinList = ({ coinData }) => {

  return (
    <div>
      {
        coinData.coins.map((coin) => {
          return (
            <div key={coin.id}>
              <h1>{coin.name}</h1>
              <img src={coin.icon} />
              <h3>{coin.price}</h3>
            </div>
          )
        })
      }
    </div>
  );
};


export const getStaticProps = async ({ params }) => {
  const id = params.id
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
      revalidate: 30
    },
  };
};

//fetch at request time, we need real time data and always cganching, each time new request
// export const getServerSideProps = async ({ params }) => {
//   // const id = params.id
//   const data = await Axios.get(
//     "https://api.coinstats.app/public/v1/coins?skip=0"
//   );

//   return {
//     props: {
//       coinData: data.data,
//     },
//   };
// };
export default CoinList;