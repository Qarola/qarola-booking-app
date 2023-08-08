import useFetch from "../../hooks/useFetch";
import "./featured.css";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Featured = () => {
  // eslint-disable-next-line
  const { data, loading, error } = useFetch(`${backendUrl}api/hotels/countByCity?cities=london,gramado,porto`);

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1561022107-23ba5b910e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/56/21/31/1000_F_156213190_GdCUPMZ9B45AyItiQr6ha2oWTgRQaw8g.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Gramado</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://img.freepik.com/foto-gratis/famoso-puente-luis-i-noche-porto-portugal-europa_268835-3496.jpg?w=740&t=st=1683923123~exp=1683923723~hmac=efdb87e30a4fe773a803f7f514f5568b100ee1f4cee02ab4e3b29aedb7667aff"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Porto</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
