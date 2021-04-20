import Card from './Card';
import HorizontalCard from './HorizontalCard';

function CardUi() {
  const comment =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore natus facilis neque quisquam nisi voluptas nobis ex maiores assumenda. Veritatis, recusandae autem soluta unde in nobis illum reprehenderit saepe rerum.';
  const img =
    'http://www.idus.com/resources/dist/images/ogimg-idus.png?ver=2.0';
  return (
    <main>
      <section className="sec__vertical-card">
        <Card
          image={img}
          label="Card Label"
          title="Card Title"
          hilight="Hilight"
          crossOut="Cross Out"
          rating={4.5}
          comment={comment}
        />
        <Card
          image={img}
          label="Card Label"
          title="Card Title"
          hilight="Hilight"
          crossOut="Cross Out"
          rating={4.5}
        />
        <Card
          image={img}
          label="Card Label"
          title="Card Title"
          hilight="Hilight"
          crossOut="Cross Out"
        />
      </section>
      <section className="sec__horizontal-card">
        <HorizontalCard
          image={img}
          title={comment}
          comment={comment}
          name="John Doe"
        />
      </section>
    </main>
  );
}

export default CardUi;
