import {BaseAPI} from './BaseAPI';

class FoodApi extends BaseAPI {
  async searchByName(query) {
    if (!query) {
      return [];
    }

    return await this.get(`search.php?s=${query}`).then(({data}) => data.meals);
  }

  async getDetailsById(id) {
    return await this.get(`lookup.php?i=${id}`).then(({data}) => data.meals);
  }

  async getCategoriesList() {
    return await this.get('categories.php').then(({data}) => data.categories);
  }

  async filterByCategory(category) {
    return await this.get(`filter.php?c=${category}`).then(
      ({data}) => data.meals,
    );
  }
}

export const FoodAPI = new FoodApi();
