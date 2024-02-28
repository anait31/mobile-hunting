const loadPhones = async (searchPhone) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones = phones => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showAllButton = document.getElementById('show-all-button');
    if(phones.length > 12) {
        
        showAllButton.classList.remove('hidden');
    }
    else {
        showAllButton.classList.add('hidden');
    }

    phones = phones.slice(0,12);


    phones.forEach(phone => {
        // console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList = `card bg-base-100 shadow-xl`;
        phoneDiv.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneDiv);
    });

    // Hide loading spinner
    toggleLoadingSpinner(false);
}

const searchFieldButton = () => {
    // console.log('hello');
    toggleLoadingSpinner(true);
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    // console.log(inputText);
    loadPhones(inputText);
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

// loadPhones();