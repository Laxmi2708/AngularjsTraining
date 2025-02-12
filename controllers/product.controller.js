
catalogmodule.controller('ProductController', function($scope) {
    
    $scope.products = [
        {
            name: "Dell XPS 13",
            price: "$999",
            features: "Intel Core i7, 16GB RAM, 512GB SSD",
            image: "https://via.placeholder.com/300x200?text=Dell+XPS+13"
        },
        {
            name: "MacBook Pro 13",
            price: "$1299",
            features: "Apple M1 Chip, 8GB RAM, 256GB SSD",
            image: "https://via.placeholder.com/300x200?text=MacBook+Pro+13"
        },
        {
            name: "HP Spectre x360",
            price: "$1199",
            features: "Intel Core i7, 16GB RAM, 512GB SSD, 4K Display",
            image: "https://via.placeholder.com/300x200?text=HP+Spectre+x360"
        },
        {
            name: "Lenovo ThinkPad X1 Carbon",
            price: "$1499",
            features: "Intel Core i7, 16GB RAM, 512GB SSD, 14-inch display",
            image: "https://via.placeholder.com/300x200?text=Lenovo+ThinkPad+X1"
        },
        {
            name: "Asus ZenBook 14",
            price: "$799",
            features: "Intel Core i5, 8GB RAM, 512GB SSD",
            image: "https://via.placeholder.com/300x200?text=Asus+ZenBook+14"
        }
    ];
});
