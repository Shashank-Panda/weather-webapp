import './App.css';
import Search from './components/Header'
const App = () => {
  // fetch(`api.openweathermap.org/data/2.5/weather?q={'Delhi'}&appid={'0ee51fb6336e80229ec5a82837f78b1e'}`).then((response)=>{
  //   console.log(response);
  // });
  // async function sample(){
    // const data = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=28.38&lon=77.12&appid=0ee51fb6336e80229ec5a82837f78b1e').then((response)=>{
    //   return response.json();
    // })
    // console.log(data);
  // }
  // sample();
  return (
    <div className="App">
      <Search/>
    </div>
  );
}

export default App;
