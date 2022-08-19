import { Routes, Route } from 'react-router-dom'
import ProductListPage from '../pages/ProductList/ProductListPage'

const AppRoutes = () => {

return (
    <Routes>

        <Route path ="/" element={<h1>inicioo</h1>}/>
        <Route path="/crear" element={<ProductListPage />} />

    </Routes>
)
}

export default AppRoutes