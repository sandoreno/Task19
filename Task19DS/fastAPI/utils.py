import numpy as np
from scipy.sparse import load_npz, csr_matrix
import pickle

# with open('datasets/id_to_item.pickle', 'rb') as handle:
#     id_to_item = pickle.load(handle)
    
with open('model_req/id_to_item.pickle', 'rb') as handle:
    id_to_item = pickle.load(handle)

with open('model_req/item_to_id.pickle', 'rb') as handle:
    item_to_id = pickle.load(handle)

with open('model_req/user_to_id.pickle', 'rb') as handle:
    user_to_id = pickle.load(handle)

with open('model_req/id_to_user.pickle', 'rb') as handle:
    id_to_user = pickle.load(handle)

sparse_matrix = load_npz('model_req/train_set_2023-05-27.npz')

# model = pickle.load(open('models/first_model.pkl', "rb"))
model = pickle.load(open('model_req/actual_model.pkl', "rb"))

knn_model = pickle.load(open('model_req/knn.pickle', "rb"))
svd = pickle.load(open('model_req/svd.pickle', "rb"))



def model_predict(array, rec_num):
    int_str = list(map(int, array.split(',')))
    a_zeros = np.zeros(23444)
    
    for i in int_str:
        a_zeros[i] += 50
    
    matrix = csr_matrix(a_zeros)
    
    row_dense = svd.transform(matrix)
    results = knn_model.kneighbors(row_dense, 128)
    
    recommends = model.recommend(
        userid = results[1][0][0],
        user_items = sparse_matrix[results[1][0][0]],
        N = rec_num,
        filter_already_liked_items=False,
        recalculate_user=True
    )
    
    rec_list = [id_to_item[x] for x in recommends[0]]
    
    return rec_list

def model_predict_for_user(user_id, rec_num):
    
    recommends = model.recommend(
        userid = user_to_id[user_id],
        user_items = sparse_matrix[user_to_id[user_id]],
        N = rec_num,
        filter_already_liked_items=True,
        recalculate_user=True
    )
    
    rec_list = [id_to_item[x] for x in recommends[0]]
    
    return rec_list