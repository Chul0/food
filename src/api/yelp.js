import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer kG-HtZb_75Psi1I47QQQK9UNc8adMstuvisgV1EYan0jAPb7iop1NAqAc7fhz6EcY4dPhIa8fnIZUduihCP-BJKc7SQ9_DMzX2cM5G-hCL9NDCs6EikJUXDaaGPIYnYx",
	},
});
