
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Footer from "./components/Footer";

import blogImg1 from './assets/blog-image-1.jpg'
import blogImg2 from './assets/blog-image-2.jpg'

const articles = [
  { id: 1, title: "On the Street in Brooklyn", image: blogImg1 },
  { id: 2, title: "Vintage in Vogue", image: blogImg2 }
];



function App() {

  return (
    <div className="flex flex-col gap-6">
      <Header title="Sartre's List" subTitle="Better-Dressed People" />
      <Nav />
      <main>
        {articles.map(article => <Article title={article.title} imgSrc={article.image} />)}
      </main>
    </div>
  )
}

export default App
