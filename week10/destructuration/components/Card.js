function Card({ title, content, styleProps= {} }) {
  return (
    <div style={{ ...styleProps }}>
      <p> title: {title} </p> 
      <p> content: {content} </p> 
    </div>
  );
}

export default Card;