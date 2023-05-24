const { CityRepository } = require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }
    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Someting went wrong in the service layer");
        }
    }
    
    async deleteCity(cityId){
        try {
            const reponse = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Someting went wrong in the service layer");
        }
    }
    
    async updateCity(cityId, data){
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Someting went wrong in the service layer");
        }
    }
    
    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Someting went wrong in the service layer");
        }
    }
}

module.exports = CityService;