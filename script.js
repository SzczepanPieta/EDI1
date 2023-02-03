fetch("d1.json")
.then(function(response){
    return response.json();
})
.then(function(persons){
    let placeholder = document.querySelector("#data-output")
    let out ="";
    for (let person of persons ){
        out+= `
            <tr>
                <td> ${persons.Gender}</td>
                <td> ${persons.Age}</td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;
});