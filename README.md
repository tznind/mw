# MW

This is a [Monster of the Week](https://evilhat.com/product/monster-of-the-week/) implementation of [LC Character Sheets](https://github.com/tznind/lc?tab=readme-ov-file#live-character-sheet).

It is online at https://tznind.github.io/mw/cs.html

## Example Characters
<table>
  <tr>
    <td width="33%">
      🪚&nbsp;<a title="The Chosen" href="https://tznind.github.io/mw/cs.html?role=The+Chosen&name=Slash+Williams&player=T&pronouns=He%2FHim&look=Greasy-haired%2C+blue-shirted+survivor+with+chainsaw+hand+and+manic+grin.&charm=-1&cool=%2B2&sharp=%2B1&tough=%2B3&weird=-1&track_luck=6&track_harm=2&track_xp=3&fate_discovery=monsters&fate_heroic_save_world=1&fate_heroic_champion=1&fate_doom_no_normal=1&fate_doom_hosts=1&weapon_form=handle&weapon_business_blade=1&weapon_business_heavy=1&weapon_business_artifact=1&weapon_material=I+cut+off+my+evil+possessed+hand+and+had+to+replace+it+with+a+chainsaw&move_c3=1&move_ci_p5=1&move_ci_p6=1&move_ci_p7=1&move_c6=1&move_c7=1&move_ci_p9=1&move_e1_1=1&takeFrom_e1_role=The+Wronged&takeFrom_e1_move=w12&move_e1_2=1&takeFrom_e1_2_role=The+Professional&takeFrom_e1_2_move=p8&move_ci_p10=1&move_cai_p2=1&move_cai_p5=1&move_cai_p6=1&move_cai_dtl=Advanced+moves%3A+Kick+Some+Ass%2C+Act+Under+Pressure%2C+Protect+Someone+and+Read+A+Bad+Situation&move_c2_dtl=You+are+destined+to+destroy+the+first+Zombie+ever+bound+to+this+world+%E2%80%94+the+one+whose+existence+anchors+all+others.&history_cnt=3&history_0_name=Shirly+Wontdie+Williams&history_0_details=You+are+close+blood+relations.+Ask+them+exactly+how+close.+My+sister%2C+I+love+her+more+than+life+itself+%28well+a+bit+less%29.&history_1_name=Linda&history_1_details=Romantic+entanglement%2C+or+fated+to+be+romantically+entangled.&history_2_details=Just+friends%2C+from+school+or+work+or+something.+Hes+an+old+highschool+budy+-+what+high+jinx+we+got+up+to&history_2_name=Chat">Slash&nbsp;Williams</a>
    </td>
    <td width="33%">
    🚬&nbsp;<a title="The Crooked" href="https://tznind.github.io/mw/cs.html?name=John+Conman&player=Jon&pronouns=He%2FHim&look=Gaunt+blond+man+in+a+battered+trench+coat%2C+chain-smoking%2C+eyes+full+of+regret.&role=The+Crooked&charm=%2B2&cool=%2B0&sharp=%2B1&tough=-1&weird=%2B1&track_luck=3&track_xp=2&move_cr9_p4=1&cr9sp=Lucifer&cr9dn=Whichford&move_cr9_p1=1&move_cr10_pickone=4&move_cr10_dtl=A+fun+ritual+with+friends+got+way+out+of+hand.&takeFrom_crx_role=Background&takeFrom_crx_move=rb6&move_cr11_p7=1&move_cr11_p6=1&move_cr11_p1=1&move_cr1=1&move_cr1_pickone=2&move_cr7=1&move_cr7_dtl=London+England&move_cri_p9=1&move_cri_p10=1&move_e1_1=1&move_e1_2=1&takeFrom_e1_role=The+Expert&takeFrom_e1_move=ex7&track_ex7=2&takeFrom_e1_2_role=The+Initiate&takeFrom_e1_2_move=i12&hide_untaken=1">John&nbsp;Conman</a>
  </tr>
</table>

---

See https://github.com/tznind/lc for main template repository.

## Sync changes

If after using the template, if find new features have been added that you want to sync into your repository run the following to sync changes:

```
git remote add upstream https://github.com/tznind/lc
git fetch upstream

git checkout main
git merge upstream/main --allow-unrelated-histories
```

(for merge conflicts e.g. in data folder - always keep your own changes and discard incoming)

## Running Locally

To run the page locally (i.e. not in GitHub Pages) you can use any of:

```powershell
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000/cs.html`

## License

Character sheet code is licensed under the [MIT license](./LICENSE).

Monster of the Week content by **Michael Sands** - used with kind permission.
