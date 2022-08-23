//Base URL that we are going to send the requests to (the API server)
const baseURL = "http://localhost:3000/api/v1";

//========Auctions========>
export const Auction = {
    //Fetch all the questions from server
    index(){
        return fetch(`${baseURL}/auctions`)
        .then(response => {
            console.log(response);
            return response.json()
        })
    },
    create(params){
        return fetch(`${baseURL}/auctions`, {
            method: 'POST',
            credentials: 'include', //need this for cookies
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => res.json());
    },
    show(id){
        return fetch(`${baseURL}/auctions/${id}`)
        .then(res => res.json());
    },
    update(id, params){
        return fetch(`${baseURL}/auctions/${id}`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
              "Content-Type": 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    destroy(id) {
        return fetch(`${baseURL}/auctions/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        })
    }
}

//========Bids========>
export const Review = {
    create(params, userId) {
      return fetch(`${baseURL}/users/${userId}/reviews`, {
        ///api/v1/users/:user_id/reviews
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(params),
      }).then((res) => res.json());
    },
  };

  
  //========Users========>
  export const User = {
      current(){
          return fetch(`${baseURL}/users/current`, {
              credentials: 'include', //need for cookies to be allowed to be sent cross-origin
            }).then(res => res.json());
        },
        create(params){
            return fetch(`${baseURL}/users`, {
                method: 'POST',
                credentials: 'include', //need for cookies to be allowed to be sent cross-origin
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            }).then(res => res.json());  
        }
    }
    
    //Sign In AJAX Helper
    export const Session = {
        create(params){
            return fetch(`${baseURL}/session`, {
                method: 'POST',
                credentials: 'include', //need for cookies to be allowed to be sent cross-origin
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            }).then(res => res.json());
        },
        destroy(){
            return fetch(`${baseURL}/session`, {
                method: 'DELETE',
                credentials: 'include' //need for cookies to be allowed to be sent cross-origin
            }).then(res => res.json());
        }
    }