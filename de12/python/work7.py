waist_list=[] #waist_listというリストを作る
for i in range(1,4):
    print(i,'人目')
    waist=float(input("胸囲は？"))
    waist_list.append(waist)  # ここでwaistという変数の値をリストに追加している。


print(waist_list)

s=sum(waist_list)