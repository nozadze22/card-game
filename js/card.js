const cardsArrayName =[
    '030e9d34-e65c-4d3d-b737-cbe17b610a7c.jpg',
  '0397f10e-5802-4be2-830e-5bfab381abda.jpg',
  '046d4bb7-d56d-44d8-a850-6c46cd74ab26.jpg',
  '088801be-75c5-4c1b-bd44-c8081ab16cf2.jpg',
  '0fe7be51-4bd5-4ed5-b394-4a17e9cd08f7.jpg',
  '1bd35d66-9abb-4530-93c8-992ce6b357fb.jpg',
  '1ecddde3-f0f4-4954-9f67-64d8543a5e0e.jpg',
  '28a342bb-3a37-4966-8204-7e96c69c21f7.jpg',
  '32630ec2-65b8-4f76-8501-91b93691fce6.jpg',
  '33a44b87-6e93-4c1c-a3fa-abe640a520be.jpg',
  '3867642b-7b19-4a06-9fe3-50586d69ed7f.jpg',
  '3bdad48c-fa98-47fd-9de0-f1f8c539bd06.jpg',
  '3c989da6-d3aa-4ebf-b78b-abfde4c6b66c.jpg',
  '3f7bd855-2162-4a04-add8-4fe6e990d869.jpg',
  '419a1d14-eab5-479a-aef5-bafa3714553a.jpg',
  '47619750-c852-43f3-bd89-c53ade17f170.jpg',
  '47e53488-da99-487b-8e9d-09e3d26e0fd4.jpg',
  '4b6b08eb-c9b3-4a67-a342-a9e376506686.jpg',
  '535eba52-6cac-4cfe-9a91-9b25cc1311ca.jpg',
  '559550e0-78e8-4730-96f2-77853ad7b7b1.jpg',
  '5b42ac48-17d1-4011-86b0-99f6dcb25836.jpg',
  '5f819717-9a27-4b8b-ac5f-a5a1693d69a0.jpg',
  '65b0d85c-a3e0-43ef-a3a7-1ad70d9efd73.jpg',
  '65d3bb9c-8cba-42d4-aaf8-90bbd2ed37bd.jpg',
  '7191cd07-acb9-4561-a279-f9386a940ffb.jpg',
  '72b76172-f355-46c2-8065-cc33597c0aa9.jpg',
  '790cc523-ebaa-4636-a731-72440a35c428.jpg',
  '83b56dc2-06af-4705-b36f-0b9d759e095e.jpg',
  '845230b1-4e92-4133-becf-8bb321be00df.jpg',
  '8c49523e-c0b9-4e92-a8bd-9afb4268d5b2.jpg',
  '8e2bb9de-4a7a-450f-bc5c-2aba381f5caa.jpg',
  '917115c6-0405-4dcf-9c06-908283a16b73.jpg',
  '92581e87-7a96-42c4-a278-48e5176f0c81.jpg',
  '93b7df10-95dd-4396-b17e-685cb0eb31df.jpg',
  '979362a2-9ae0-4e69-8544-1d7a5281cb9d.jpg',
  'a0d580bc-b16d-4405-9104-86c46fb2b2a7.jpg',
  'acdb1f3d-0b65-489b-b2fa-8734813fb3c8.jpg',
  'afec0842-ebb6-468f-ad9e-a654c46c283d.jpg',
  'b1e2e283-8d07-447b-8917-dbde5305ade1.jpg',
  'b4029669-6e5b-433a-b2ac-c0c25ab7d3c8.jpg',
  'b8836cb6-c3dd-4eff-9883-b1e5fbddee1c.jpg',
  'c305e9f4-6cf7-4dd9-9dc8-e9477251be2a.jpg',
  'ca8eca76-8012-436e-96da-0f3184629843.jpg',
  'cc9b314b-3a45-440a-84c2-75513d6aa8ea.jpg',
  'd7609faf-ed3f-4d21-9481-a3e493a6e3b3.jpg',
  'da2cd3b5-7a37-4481-abf1-241b541ffef5.jpg',
  'dcf02733-7e4e-4936-99d1-3e05293ef7c9.jpg',
  'e05a8738-bfed-4b55-9ad1-cfd9dc859bb1.jpg',
  'edc442b0-8c24-4bb6-a11d-580084b4b0e3.jpg',
  'efddf254-0694-443d-bdd5-89a0ab51367b.jpg',
  'f122a12a-a1f2-42e5-b559-3fa162a15682.jpg',
  'f22f9511-e52d-40a0-a1a0-6a0876664e6f.jpg',
  'f8c63fcf-b4d1-454a-a6f3-efe0e77c8d6e.jpg',
  'f93bf183-0411-4ff5-9e8d-930b8a139c68.jpg'
];

function getShuffledCards(array = [], count = cardsArrayName.length) {
    for(let i = array.length - 1; i > 0; i--){
        const j =  Math.floor(Math.random() * (i + 1));
        // const temp = array[j];
        // array[j] = array[i];
        // array[i] = temp;
        [array[i], array[j]] = [array[j], array[i]];
    } 
    return array.slice(0, count);
}


function getShuffledWithDuplicates(array = [], count = 0) {
    const shuffledCards = getShuffledCards(array, count);
    const dublicateCards = [];
    for(const itme of shuffledCards) {
        dublicateCards.push(itme, itme);
    }
        for(let i = dublicateCards.length - 1; i > 0; i--){
            const j =  Math.floor(Math.random() * (i + 1));
            [dublicateCards[i], dublicateCards[j]] = [dublicateCards[j], dublicateCards[i]];
        } 
    return dublicateCards;
}

console.table(getShuffledWithDuplicates(cardsArrayName, 10));


