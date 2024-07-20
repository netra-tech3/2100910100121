const {fetchProd, fetchProdByid}= require('../connection.js')

const getProducts = async (req,res)=>{
    const {categoryname}= req.params;
    const {N=10, sorting='price', sortorder= 'ascending' ,page=1,minPrice=1, maxPrice=1000000 }= req.query;



    try {
        const prod= await fetchProd(categoryname,minPrice, maxPrice, top);
        const temp= Math.min(N,10);


     const begin= (temp*(page-1));
     const paging= prod.slice(begin, begin+N);

     res.json(paging);





        prod.sort((x,y)=>{
            if(sortorder!= 'ascending'){
                return y[sorting]- x[sorting];

            }
            else{
                return x[sorting]- y[sorting];

            }
            
        });



    } catch (error) {
        res.status(500).json({error:"error occured"});

    }

}



const getprodbyid= async(req,res)=>{
    const {categoryName, prodId}= req.params;
    try {
        const prod= await fetchProdByid(categoryName, prodId);
        if(!prod){
            res.status(404).json({message:"product doesnot exist"});

        }

        else{
            res.json(prod);

        }
    } catch (error) {
        res.status(500).json({error:"some error occured"});

    }
}

module.exports= {getProducts, getprodbyid};
