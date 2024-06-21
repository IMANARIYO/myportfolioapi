if(Model === Farm){
    if (newObject.trees
         && newObject.trees.length > 0) {
      const listOfTrees = await Tree.find({ _id: { $in: newObject.trees } });
      if (!listOfTrees || listOfTrees.length === 0) {
        throw new AppError('Some trees not found', 404);
      }
    }
    const result = await Model.create(newObject);
    if (newObject.trees && newObject.trees.length > 0) {
      await Tree.updateMany({ _id: { $in: newObject.trees } }, { $push: { farm: result._id } });
    }
    return result;
  }