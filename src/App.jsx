import './App.css'
import RecipeList from './components/RecipeList'
import recipes from './data/recipes.json'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🍳 Recipe Repo</h1>
        <p>探索美食，輕鬆轉換單位</p>
      </header>
      <main className="app-main">
        <RecipeList recipes={recipes} />
      </main>
      <footer className="app-footer">
        <p>© 2026 Recipe Repo. Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
