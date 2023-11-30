
const AddBlog = () => {


    const hanbdlAddBlog = (event)=> {
        event.preventDefault()
        
    }


    return (
        <div className="p-16">
            <h2 className="text-3xl text-center ">here is add blog</h2>
        
            <form onSubmit={hanbdlAddBlog}>
          {" "}
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            {" "}
            <div>
              <label
              
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
               title
              </label>
              <input
                type="text"
                name="title"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter Blog Title"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label
              
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Photo
              </label>{" "}
              <input
                type="text"
                name="img"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter Blog photo"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label
                htmlFor="job"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
              Description
              </label>{" "}
             <textarea type='text' name="description" id="" cols="70" rows="7" className="text-sm bg-gray-100  text-gray-700 block mb-1 font-medium border-2"></textarea>
            </div>{" "}
            
          </div>{" "}
          <div className="space-x-4 mt-8">
            {" "}
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Save
            </button>{" "}
            <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
              Cancel
            </button>{" "}
          </div>{" "}
        </form>{" "}
  
        </div>
    );
};

export default AddBlog;