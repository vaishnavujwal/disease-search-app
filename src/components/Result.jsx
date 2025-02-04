export default function Result({ tablet, info }) {
    return (
      <div style={{ marginTop: "20px" }}>
        {tablet ? <h2>Take this tablet: {tablet}</h2> : null}
        {info ? <p>{info}</p> : null}
      </div>
    );
  }
  