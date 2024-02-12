export function convertKelvinToCelsius(kelvin: number) {
    const temp = kelvin - 273.15;
    return Math.round(temp * 10) / 10;
}