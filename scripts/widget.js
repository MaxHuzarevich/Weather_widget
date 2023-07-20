import {startWidget} from "./modules/widgetService.js";
import {fetchWeather} from "./modules/APIservice.js";


const initWidget = async (app) => {
    const widget = startWidget();
    app.append(widget);

    const dataWeather = await fetchWeather('Пинск');
    console.log(dataWeather)
}

const app = document.querySelector('#app')

initWidget(app);
