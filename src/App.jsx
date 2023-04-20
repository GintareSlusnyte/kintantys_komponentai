import './App.css';
import Card from './components/Card';


const App = () => {

  const korteles = [
    {
      imageData:{
        source:'https://artincontext.org/wp-content/uploads/2022/11/beige-color.jpg',
        alternativeText:'nature beige',
        CSS_class:'img-med'
      },
      heading:'Pavadinimas1',
      paragraph:'Paragrafas1'
    },{
    imageData:{
      source:'https://afbeelding.lc.nl/lc/incoming/9op7ab-Bruinbeige.jpeg/alternates/LANDSCAPE_1280/Bruinbeige.jpeg',
      alternativeText:'nature beige',
      CSS_class:'img-med'
    },
    heading:'Pavadinimas2',
    paragraph:'Paragrafas2'
    },{
      imageData:{
        source:'https://thumbs.dreamstime.com/b/tan-beige-color-shades-swatches-palette-names-tan-beige-color-shades-swatches-palette-names-vector-257782212.jpg',
        alternativeText:'nature beige',
        CSS_class:'img-med'
      },
      heading:'Pavadinimas3',
      paragraph:'Paragrafas3'
  
    }
  ];

  return (
    <>

    {
      korteles.map((kortele, i) => {
        return <Card 
        key={i}
        imageData={{
          source:kortele.imageData.source,
          alternativeText:kortele.imageData.alternativeText,
          CSS_class: kortele.imageData.CSS_class
        }}
        heading={kortele.heading}
        paragraph={kortele.paragraph}
      />
      })
    }

    {/* <Card 
      imageData={{
        source:'https://artincontext.org/wp-content/uploads/2022/11/beige-color.jpg',
        alternativeText:'nature beige',
        CSS_class:'img-med'
      }}
      heading='Pavadinimas'
      paragraph='Paragrafas'
    />
      <Card 
      imageData = {{
          source:'https://afbeelding.lc.nl/lc/incoming/9op7ab-Bruinbeige.jpeg/alternates/LANDSCAPE_1280/Bruinbeige.jpeg',
          alternativeText:'decor',
          CSS_class:'img-med'
      }}
      heading='Pavadinimas'
      paragraph='Paragrafas'
      />

        <Card 
        imageData={{
          source:'https://thumbs.dreamstime.com/b/tan-beige-color-shades-swatches-palette-names-tan-beige-color-shades-swatches-palette-names-vector-257782212.jpg',
          alternativeText:'tan beige',
          CSS_class:'img-med'
        }}
        heading='Pavadinimas'
        paragraph='Paragrafas'
        /> */}
    </>
  );
}

export default App;
