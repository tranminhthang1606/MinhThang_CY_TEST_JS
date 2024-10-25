var mang = new Array(10, 5, 2, 5, 6, 7, 8, 9);

new Promise((resolve, reject) => {
    setTimeout(() => {
        let total = mang.reduce((prev, curr) => {
            return prev + curr;
        }, 0);
        console.log(total);
        resolve(mang);
    }, 3000);
}).then(res => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let listPrime = [];
            res.forEach(e => {
                if (e < 2) {
                    return false;
                }
                for (let i = 2; i <= Math.sqrt(e); i++) {
                    if (e % i === 0) {
                        return false;
                    }
                }
                listPrime.push(e);
                ;
            });
            console.log(listPrime);
            resolve(res);
        }, 3000);
    }).then((res) => {
        new Promise((resolve, reject) => {
            let listNum = [];
            setTimeout(() => {
                res.forEach(e => {
                    if (e % 3 == 0) {
                        listNum.push(e);
                    }
                });
                console.log(listNum);
            }, 3000);
        })

    })

})