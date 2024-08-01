import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import PortfolioLayout from './layouts/PortfolioLayout'
import Home from './pages/Home'
import Kompaniya from './pages/kompaniya'
import Galareya from './pages/Galareya'
  import Portfolio from './pages/Portfolio'
  import PortfolioDetail from '../src/pages/PortfolioDetail'
import ToshUy from './pages/ToshUy'
import BloklanganUylar from './pages/BloklanganUylar'
import RamkaliUy from './pages/RamkaliUy'
import YogochdanYasalgan from './pages/YogochdanYasalgan'
import YarimYogoch from './pages/YarimYogoch'
import YogochUy from './pages/YogochUy'
import Vannalar from './pages/Vannalar'
import Gazebos from './pages/Gazebos'
import Garaj from './pages/Garaj'
import FoydalanishSharti from './pages/FoydalanishSharti'
import SingUp from './pages/SingUp'
import RoyxatdanOt from './pages/RoyxatdanOt'
import BizningLoiha from './pages/BizningLoiha'
import BizHaqimizda from './pages/BizHaqimizda'
import Aksiya from './pages/Aksiya'
import Maqolalar from './pages/Maqolalar'
import Kontakt from './pages/Kontakt'
import QurilishniKechiktirish from './pages/QurilishniKechiktirish'
import PageNoteFound from './pages/PageNoteFound'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/BizningLoiha' element={<BizningLoiha/>}/>
        <Route path='/Kompaniya' element={<Kompaniya/>}/>
        <Route path='/Galareya' element={<Galareya/>}/>
        <Route path='/ToshUy' element={<ToshUy/>}/>
        <Route path='/BloklanganUylar' element={<BloklanganUylar/>}/>
        <Route path='/RamkaliUy' element={<RamkaliUy/>}/>
        <Route path='/YogochdanYasalgan' element={<YogochdanYasalgan/>}/>
        <Route path='/YarimYogoch' element={<YarimYogoch/>}/>
        <Route path='/YogochUy' element={<YogochUy/>}/>
        <Route path='/Vannalar' element={<Vannalar/>}/>
        <Route path='/Gazebos' element={<Gazebos/>}/>
        <Route path='/Garaj' element={<Garaj/>}/>
        <Route path='/FoydalanishSharti' element={<FoydalanishSharti/>}/>
        <Route path='/SingUp' element={<SingUp/>}/>
        <Route path='/Aksiya' element={<Aksiya/>}/>
        <Route path='/Kontakt' element={<Kontakt/>}/>
        <Route path='/Maqolalar' element={<Maqolalar/>}/>
        <Route path='/QurilishniKechiktirish' element={<QurilishniKechiktirish/>}/>
        <Route path='/RoyxatdanOt' element={<RoyxatdanOt/>}/>
        <Route path='/BizHaqimizda' element={<BizHaqimizda/>}/>
        <Route path='*' element={<PageNoteFound/>}/>




        <Route path='/portfolio' element={<PortfolioLayout/>}>
          <Route index element={<Portfolio/>}/>
          <Route path='/portfolio/:title' element={<PortfolioDetail/>}/>
        </Route>
     
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App