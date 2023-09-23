const letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const symbol = ["@", "#", "$", "&", "!"]
class passward {
    genrateSuperStrongPassward() {
        let superStrongPassward = "";
        let t = 0;
        let count = 0;
        while (t < 6) {
            if (t == 0) {
                let l1 = letter[Math.floor(Math.random() * letter.length)];
                l1 = l1.toUpperCase();
                superStrongPassward = superStrongPassward.concat(l1);
            }

            else {
                if (Math.floor(Math.random() * 3) == 0) {
                    let l2 = letter[Math.floor(Math.random() * letter.length)];
                    superStrongPassward = superStrongPassward.concat(l2);
                }
                else if (Math.floor(Math.random() * 3) == 1) {
                    let l3 = Math.floor(Math.random() * 10);
                    superStrongPassward = superStrongPassward.concat(l3);
                }
                else {
                    for (let i = 0; i < superStrongPassward.length; i++) {
                        if (superStrongPassward[i] == "@" || superStrongPassward[i] == "#" || superStrongPassward[i] == "$" || superStrongPassward[i] == "&" || superStrongPassward[i] == "!") {
                            count += 1;
                        }
                    }
                    if (count == 0) {
                        let l4 = symbol[Math.floor(Math.random() * symbol.length)];
                        superStrongPassward = superStrongPassward.concat(l4);
                    }
                    else {
                        if (Math.floor(Math.random() * 2) == 0) {
                            let l2 = letter[Math.floor(Math.random() * letter.length)];
                            superStrongPassward = superStrongPassward.concat(l2);
                        }
                        else {
                            let l3 = Math.floor(Math.random() * 10);
                            superStrongPassward = superStrongPassward.concat(l3);
                        }
                    }
                }
            }
            t += 1;
        }
        return superStrongPassward;
    }
    genrateWeekPassward() {
        let weekPassward = "";
        let x = 0;
        while (x < 6) {
            if (x < 3) {
                let a = letter[Math.floor(Math.random() * letter.length)];
                weekPassward = weekPassward.concat(a);
            }
            else {
                let a = Math.floor(Math.random() * 10);
                weekPassward = weekPassward.concat(a);
            }
            x += 1;
        }
        return weekPassward;
    }
    genrateStrongPassward() {
        let strongPassward = "";
        let t = 0;
        while (t < 6) {
            if (t == 0) {
                let l1 = letter[Math.floor(Math.random() * letter.length)];
                l1 = l1.toUpperCase();
                strongPassward = strongPassward.concat(l1);
            }
            else {
                if (Math.floor(Math.random() * 2) == 0) {
                    let l2 = letter[Math.floor(Math.random() * letter.length)];
                    strongPassward = strongPassward.concat(l2);
                }
                else {
                    let l3 = Math.floor(Math.random() * 10);
                    strongPassward = strongPassward.concat(l3);
                }
            }
            t+=1;
        }
        return strongPassward ;
    }
}
let p = new passward();
console.log(p.genrateWeekPassward());
console.log(p.genrateSuperStrongPassward());
console.log(p.genrateStrongPassward());
