const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];
    

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
users.signUp = function(_id,username,email,password){
    if(this.find(user => user.email === email)){
        console.log('This email has alreadn been used. Please use another email. :' + email);
        return;
    }
    let user = {
        _id,
        username,
        email,
        password,
        createdAt: new Date().toLocaleString(),
        isLoggedIn: false
    }
    this.push(user);
}

users.signIn = function(email,password){
    let user = this.find(user => user.email === email);
    if(user){
        if(user.password === password){
            user.isLoggedIn = true;
            console.log('You are logged in');
        }else{
            console.log('Password is not correct');
        }
    }else{
        console.log('User not found');
    }

}

users.signUp('ab12ex','Alex','test@gmail.com',"123123");
console.log(users);
users.signUp('louysa','dogan','test@gmail.com',"hdfhfdhd");
console.log(users);

users.signIn('test@gmail.com','123123');
users.signIn("tessaat@gmail.com","123123");
users.signIn('test@gmail.com','12312344');

products.rateProduct = function(userId,productId,rate){
    let product = this.find(product => product._id === productId);
    if(product){
        if(rate<0 || rate > 10){
            console.log('Rate should be between 0 and 10');
            return;
        }
        product.ratings.push({userId,rate});
    }else{
        console.log('Product not found');
    }
}

products.likeProduct = function(userId,productId,liked){
    let product = this.find(product => product._id === productId);
    if(product){
        if(liked){
            product.likes.push(userId);
        }else{
            //if it is not liked and remove like if it was liked.
            let index = product.likes.indexOf(userId);
            if(index !== -1){
                product.likes.splice(index,1);
            }
            
        }
    }else{
        console.log('Product not found');
    }
    
}


products.likeProduct('louysa','aegfal',true);
console.log(products);
products.likeProduct('louysa','aegfal',false);
console.log(products);
products.rateProduct('louysa','eedfcf',5);
console.log(products);
products.rateProduct('louysa','aegfal',-2);
console.log(products);
