# MW

This is a [Monster of the Week](https://evilhat.com/product/monster-of-the-week/) implementation of [LC Character Sheets](https://github.com/tznind/lc?tab=readme-ov-file#live-character-sheet).

It is online at https://tznind.github.io/mw/cs.html

## Example Characters
<table>
  <tr>
    <td width="33%">
      🪚&nbsp;<a title="The Chosen" href="https://tznind.github.io/mw/cs.html?role=The+Chosen&name=Slash+Williams&player=T&pronouns=He%2FHim&look=Greasy-haired%2C+blue-shirted+survivor+with+chainsaw+hand+and+manic+grin.&charm=-1&cool=%2B2&sharp=%2B1&tough=%2B3&weird=-1&track_luck=6&track_harm=2&track_xp=3&fate_discovery=monsters&fate_heroic_save_world=1&fate_heroic_champion=1&fate_doom_no_normal=1&fate_doom_hosts=1&weapon_form=handle&weapon_business_blade=1&weapon_business_heavy=1&weapon_business_artifact=1&weapon_material=I+cut+off+my+evil+possessed+hand+and+had+to+replace+it+with+a+chainsaw&move_c3=1&move_ci_p5=1&move_ci_p6=1&move_ci_p7=1&move_c6=1&move_c7=1&move_ci_p9=1&move_e1_1=1&takeFrom_e1_role=The+Wronged&takeFrom_e1_move=w12&move_e1_2=1&takeFrom_e1_2_role=The+Professional&takeFrom_e1_2_move=p8&move_ci_p10=1&move_cai_p2=1&move_cai_p5=1&move_cai_p6=1&move_cai_dtl=Advanced+moves%3A+Kick+Some+Ass%2C+Act+Under+Pressure%2C+Protect+Someone+and+Read+A+Bad+Situation">Slash&nbsp;Williams</a>
    </td>
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
