from turtle import window_height


name="鳴海"
waist=50
age=50
weight=50
# それぞれの変数に＝の変数を代入している。

print(name, "さんは胸囲", waist, "cmで年齢は", age, "才で体重は", weight, 'kgですね。')

# if構文は　and or not  が使える
if waist>=85 and age>=40:
    print(name,'さん内臓脂肪蓄積注意です')
else:
    print(name,'さん、胸囲は問題ありません')
if weight<50:
    print('瘦せすぎです。')
elif weight==50<65:
    print('標準体重です。')
else :
    print('太りすぎです。')