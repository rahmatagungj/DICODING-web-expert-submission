import CONFIG from '../../globals/config'

const { SERVER_IMAGE_URL } = CONFIG

const RestaurantCard = (item) => {
  return `
    <div class="card">
        <div class="city">
            Kota ${item.city}
        </div>
        <img alt="${item.name}" class="featured-image lazyload"
            width="600px"
            height="400px"
            src="./images/image-placeholder.png"
            data-src="${SERVER_IMAGE_URL}${item.pictureId}"
            loading="lazy"/>
        <div class="content">
            <div class="rating">
            ⭐️ Rating ${item.rating}
            </div>
            <a href="/#/detail/${item.id}" id="link-restaurant" value="${item.id}">
                <h4 class="restaurant-title">
                ${item.name}
                </h4>
            </a>
            <p class="description">
            ${item.description.slice(0, 90)}
            </p>
        </div>
    </div>
`
}

export default RestaurantCard
