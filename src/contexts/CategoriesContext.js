import { useArray, useToggleInput } from 'hooks';
import React, { useEffect } from 'react';
import { makeReq } from 'utils/makeReq';

export const CategoriesContext = React.createContext();

export const CategoriesProvider = ({ children }) => {
  // let history = useHistory();
  const [
    categories,
    setCategories,
    pushCategory,
    // filterCategories,
    // updateCategory,
    // removeCategory,
    // clearCategories,
  ] = useArray([], '_id');
  const [loading, toggleLoading] = useToggleInput(true);

  const fetchCategories = async () => {
    try {
      const resData = await makeReq('/categories');
      // console.log(`resData`, resData);
      setCategories(resData.categories);
    } catch (err) {
      // console.log(`err`, err)
    } finally {
      toggleLoading();
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // * CRUD Operations
  const getCategoryById = (id) => categories.find((el) => el._id === id);

  const createNewCategory = async (
    category,
    successCallback,
    errorCallback
  ) => {
    try {
      const resData = await makeReq(
        `/categories`,
        {
          body: { ...category },
        },
        'POST'
      );

      pushCategory(resData.category);
      // * if successCallback is defined , then call it
      successCallback();
    } catch (err) {
      errorCallback();
    } finally {
    }
  };

  return (
    <CategoriesContext.Provider
      displayName='Categories Context'
      value={{
        categories,
        loading,
        getCategoryById,
        createNewCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
