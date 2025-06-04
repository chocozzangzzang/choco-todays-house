import React from 'react'

const ProductCard = ({ product }) => {
    
    return (
        <div>
            <img src="https://private-user-images.githubusercontent.com/51441430/451279568-820622f9-1bd5-45de-baff-7e306be3c3c3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDkwMjYxNzksIm5iZiI6MTc0OTAyNTg3OSwicGF0aCI6Ii81MTQ0MTQzMC80NTEyNzk1NjgtODIwNjIyZjktMWJkNS00NWRlLWJhZmYtN2UzMDZiZTNjM2MzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA0VDA4MzExOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ0OGI3OGIwOGExMTFhNDQwZGYxMmNhZTUyODEzZDk1ODFlNWE1YTc3ZGRjZmNkNGIzMWExNzA2ZmM4YmI5ZDUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.6l3d08zJttnxn3txubjQHRXlnpF7I7Luud9Osyhv8v0" />
            <p>{product?.choice? "**HOUSE'S CHOICE**" : ""}</p>
            <p>{product?.title}</p>
            <p>{product?.price}</p>
            <p>{product?.new? "NEW!!" : ""}</p>
        </div>
    )
}

export default ProductCard