import React, { useContext } from 'react';
import {useQuery} from '@apollo/react-hooks'

import {Grid,Card,Transition} from 'semantic-ui-react'
import PostCard from '../components/PostCard.js';
import { AuthContext } from '../context/auth.js';
import PostForm from '../components/PostForm';
import {FETCH_POSTS_QUERY} from '../utils/graphql';
import RightPortal from '../components/RightPortal.js';

function Home(){
    const {user}=useContext(AuthContext)
    //const{loading, data:{getPosts:posts}} = useQuery(FETCH_POSTS_QUERY);
    
    const { data, loading, error } = useQuery(FETCH_POSTS_QUERY);
    if(error) {
        console.log(error);
        return (
<section className="content_block_notFound" data-test="notFoundComponent">
  

    <div className="grid">

      <div className="column column_12_12">
        <div className="content_wrap noBoarder">
          <div className="title">404 Not Found</div>
          
        </div>
      </div>

    </div>

  </section>

        ); // blocks rendering
     }


    if(data) {
        //console.log(data);
        const { getPosts: posts } = data;
        return(
            <div className= 'grid'> 
        <Grid columns={1}>
        <Grid.Row className ="page-title">
        </Grid.Row>
        <RightPortal/>   
        <Grid.Row>
            {user &&(
                <Grid.Column>
                    <PostForm/>
                </Grid.Column>
            )}
          {loading && <h1>Loading posts..</h1>}
     {
     
     
     data && (
       <Transition.Group>
         {posts &&
           posts.map((post) => (
             <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
               <PostCard post={post} />
             </Grid.Column>
           ))}
       </Transition.Group>
     )}
          </Grid.Row>
        </Grid>
        </div>
            
    
        )
    }
    else
    return(
     <section className="content_block_notFound" data-test="notFoundComponent">
   
 
     <div className="grid">
 
       <div className="column column_12_12">
         <div className="content_wrap noBoarder">
           <div>
     
           
           <Grid columns={1}>
           <Grid.Row className ="page-title">
           <h1>Recent Posts</h1>
           {loading && <h1>Loading posts..</h1>}
           </Grid.Row>   
           <Grid.Row>
               {user &&(
                   <Grid.Column>
                       <PostForm/>
                   </Grid.Column>
               )}
               
             {/*{loading ? (
                 <h1>Loading post..</h1>
             ):(
                <Transition.Group>
                    {posts && posts.map((post) =>(
                   <Grid.Column key = {post.id}style ={{marginBottom:20}}>
                   <PostCard post={post}/>
                 </Grid.Column>
                ))}
                </Transition.Group>
             )}*/}
             
             </Grid.Row>
           </Grid>
           
           
           
           
           
           </div>
       </div>
 
     </div>
 </div>
   </section>
 
   
         
     );








    /*return(
        
        <Card fluid >
<Card.Content>
       <div className= 'grid'> 
       

    <Grid columns={1}>
        
    <Grid.Row className ="page-title">
    
    <h1>eLOGISTICSpro</h1>
   
    <h1>Your Online Suply Chain Solution</h1>
    
    </Grid.Row>   
    <Grid.Row>
        {user &&(
            <Grid.Column>
                <PostForm/>
            </Grid.Column>
            
        )}
        
      {loading ? (
          <h1>Loading post..</h1>
          
      ):(
         <Transition.Group>
             {posts && posts.map((post) =>(
            <Grid.Column key = {post.id}style ={{marginBottom:20}}>
            <PostCard post={post}/>
          </Grid.Column>
          
         ))}
          
         </Transition.Group>
      )}
      </Grid.Row>
      
    </Grid>
    
    </div>
    </Card.Content>
    </Card>
    );
    */
    
    }


export default Home;
