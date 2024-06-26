import { Button, TableRow, Table , TableHead , TableCell, TableBody , styled } from "@mui/material"
import { categories } from "../../constants/data";
import {Link , useSearchParams} from "react-router-dom";

const StyledTable=styled(Table)`
border:1px solid rgba(234,234,234,1);

`
//last is shade
const StyledButton=styled(Button)`
margin:20px;
width:85%;
background-color:#6495ED;
color:#fff;
`
const StyledLink=styled(Link)`
text-decoration:none;
color:inherit;
`

const Categories=()=>{

    const [searchParams]=useSearchParams();
    const category=searchParams.get('category');

    return (
    <>
    <StyledLink to={`/create?category=${category || "" }`} >
        <StyledButton  variant="contained">Create Blog</StyledButton>
    </StyledLink>
    <StyledTable>
        <TableHead>
            <TableRow>
                <TableCell>
                    <StyledLink to="/">
                        All Categories
                    </StyledLink>
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                categories.map(category=>
                    <TableRow key={category.id}>
                        <TableCell >
                            <StyledLink to={`/?category=${category.type}`}>
                                {category.type}
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                
                )
            }
        </TableBody>
    </StyledTable>
   </>
 )
}

export default Categories;