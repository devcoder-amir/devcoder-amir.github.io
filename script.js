let isRunning = false;
        const maxElements = 8;

        document.addEventListener('DOMContentLoaded', _ => {
            //addTitle();

            document.querySelector('section').addEventListener('click', onDivClicked);
            document.querySelector('#blank').addEventListener('click', (event) => {

                event.cancelBubble = true;

                if(isRunning)
                    return;

                document.querySelectorAll('div[id^=div]').forEach(div => div.style.backgroundColor = 'green');
            });
        });

        function onDivClicked(event) {
            if (isRunning)
                return;

            if (event.target.tagName != 'DIV' || event.target.id == 'blank')
                return;


            isRunning = true;

            let id = event.target.id;
            let num = +id.split('_')[1];
            let nums = getSequence(num);

            nums.forEach((n, index) => {

                let div_id = '#div_' + n;
                
                setTimeout(() => {
                    let div = document.querySelector(div_id);
                    setDivBG(div);

                    if(index == maxElements - 1)
                     isRunning = false;
                }, (300 * index));
            });

        }

        function getSequence(num) {
            let nums = [];
            while (nums.length < maxElements) {
                nums.push(num);
                num = num == maxElements ? 1 : num + 1;
            }
            return nums;
        }

        function setDivBG(div) {
            let newBodyColor = generateNewColor();
            div.style.backgroundColor = newBodyColor;
        }

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }


        const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]



        function getCharacter(index) {
            return hexCharacters[index]
        }

        function generateNewColor() {
            let hexColorRep = "#"

            for (let index = 0; index < 6; index++) {
                const randomPosition = Math.floor(Math.random() * hexCharacters.length)
                hexColorRep += getCharacter(randomPosition)
            }

            return hexColorRep
        }

        function addTitle() {
            let divs = document.querySelectorAll('div');
            console.log(divs);
            divs.forEach(d => {
                //console.log(d);
                if (d.id != "blank") {
                    console.log(d.id);
                    let s = document.createElement("SPAN");
                    s.textContent = d.id;
                    d.append(s);
                }
            });
        }