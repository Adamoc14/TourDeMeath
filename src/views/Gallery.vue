<template>
  <main>
    <div class="Gallery">
      <h2>Gallery</h2>
      <div class="GPic" v-for="GPic in this.folder.slice(1, 21)" :key="GPic.id">
        <img :src="GPic" alt="" />
      </div>
    </div>
    <aside>
      <h2>Contact Info</h2>
      <h2>Where To Find Us</h2>
      <p>Ratoath GAA, Ratoath</p>
      <h2>Email Us At :</h2>
      <p>tourdemeath@gmail.com</p>
    </aside>
  </main>
</template>

<script>
export default {
  data() {
    return {
      folder: [
        require("../assets/TourDeMeathPics/32313441-578453235867191-2967866725598494720-n.jpg"),
        require("../assets/TourDeMeathPics/32313467-578444709201377-6553814038621454336-n.jpg"),
        require("../assets/TourDeMeathPics/32313471-578452059200642-956051087205335040-n.jpg"),
        require("../assets/TourDeMeathPics/28958660-548696242176224-3139520118707413728-n.jpg"),
        require("../assets/TourDeMeathPics/32313493-578457189200129-7133726226643943424-n.jpg"),
        require("../assets/TourDeMeathPics/31589251-578441012535080-3215826938627096576-n.jpg"),
        require("../assets/TourDeMeathPics/32313517-578450345867480-3457861501241524224-n.jpg"),
        require("../assets/TourDeMeathPics/31600671-578453199200528-8848155099646656512-n.jpg"),
        require("../assets/TourDeMeathPics/32313608-578458689199979-7697394938547273728-n.jpg"),
        require("../assets/TourDeMeathPics/31632012-578453099200538-5979680952434032640-n.jpg"),
        require("../assets/TourDeMeathPics/32313646-578447599201088-5230081706127523840-n.jpg"),
        require("../assets/TourDeMeathPics/31632053-578446992534482-2165679216819961856-n.jpg"),
        require("../assets/TourDeMeathPics/32313664-578455729200275-6507516709237161984-n.jpg"),
        require("../assets/TourDeMeathPics/31663947-578457272533454-3446047579513552896-n.jpg"),
        require("../assets/TourDeMeathPics/32313686-578458979199950-7379700455384809472-n.jpg"),
        require("../assets/TourDeMeathPics/31958909-578448812534300-4233880946811600896-n.jpg"),
        require("../assets/TourDeMeathPics/32313695-578443702534811-8472810765118603264-n.jpg"),
        require("../assets/TourDeMeathPics/32105037-578456002533581-6396859874742894592-n.jpg"),
        require("../assets/TourDeMeathPics/32313768-578458035866711-8615471887721431040-n.jpg"),
        require("../assets/TourDeMeathPics/32169419-578449305867584-8077927932871311360-n.jpg"),
        require("../assets/TourDeMeathPics/32313793-578459942533187-2788304961975353344-n.jpg"),
        require("../assets/TourDeMeathPics/32169419-578456282533553-8883604741800591360-n.jpg"),
        require("../assets/TourDeMeathPics/32313796-578455195866995-139702908043132928-n.jpg"),
        require("../assets/TourDeMeathPics/32191907-578447319201116-3949571008217743360-n.jpg"),
        require("../assets/TourDeMeathPics/32313800-578443895868125-7437578382398717952-n.jpg"),
        require("../assets/TourDeMeathPics/32207443-578451732534008-8788629399839703040-n.jpg"),
        require("../assets/TourDeMeathPics/32313835-578458815866633-5172892266666131456-n.jpg"),
        require("../assets/TourDeMeathPics/32214770-578456635866851-4630432056025808896-n.jpg"),
        require("../assets/TourDeMeathPics/32313883-578443749201473-7429702374450528256-n.jpg"),
        require("../assets/TourDeMeathPics/32215314-578449395867575-3992493399545479168-n.jpg"),
        require("../assets/TourDeMeathPics/32313926-578444819201366-3359246578224201728-n.jpg"),
        require("../assets/TourDeMeathPics/32222223-578450052534176-4458475730296111104-n.jpg"),
        require("../assets/TourDeMeathPics/32313931-578445315867983-9048785078016016384-n.jpg"),
        require("../assets/TourDeMeathPics/32222257-578458295866685-80636563578421248-n.jpg"),
        require("../assets/TourDeMeathPics/32313962-578442265868288-4405191644467429376-n.jpg"),
        require("../assets/TourDeMeathPics/32222462-578449245867590-8412234365987192832-n.jpg"),
        require("../assets/TourDeMeathPics/32313965-578443969201451-3081696703405883392-n.jpg"),
        require("../assets/TourDeMeathPics/32235753-578449425867572-2202062967116136448-n.jpg"),
        require("../assets/TourDeMeathPics/32314037-578450562534125-6916527823519744000-n.jpg"),
        require("../assets/TourDeMeathPics/32239650-578445855867929-3810116731536408576-n.jpg"),
        require("../assets/TourDeMeathPics/32314116-578443412534840-3563978276131045376-n.jpg"),
        require("../assets/TourDeMeathPics/32240265-578445765867938-4275022082057699328-n.jpg"),
        require("../assets/TourDeMeathPics/32314149-578450472534134-2795536647519731712-n.jpg"),
        require("../assets/TourDeMeathPics/32243692-578457412533440-7861962043627143168-n.jpg"),
        require("../assets/TourDeMeathPics/32314152-578448095867705-5961951542184509440-n.jpg"),
        require("../assets/TourDeMeathPics/32244047-578448915867623-4617255895225597952-n.jpg"),
        require("../assets/TourDeMeathPics/32323373-578455115867003-925713134738472960-n.jpg"),
        require("../assets/TourDeMeathPics/32253564-578457585866756-5630806398272012288-n.jpg"),
        require("../assets/TourDeMeathPics/32323519-578447065867808-263964738642247680-n.jpg"),
        require("../assets/TourDeMeathPics/32253588-578455515866963-972539672813109248-n.jpg"),
        require("../assets/TourDeMeathPics/32323526-578450115867503-6069748778863165440-n.jpg"),
        require("../assets/TourDeMeathPics/32257415-578457359200112-8958670410673553408-n.jpg"),
        require("../assets/TourDeMeathPics/32324228-578447752534406-3640702502459932672-n.jpg"),
        require("../assets/TourDeMeathPics/32257428-578458945866620-4978918224885186560-n.jpg"),
        require("../assets/TourDeMeathPics/32324936-578450789200769-3277377938852413440-n.jpg"),
        require("../assets/TourDeMeathPics/32260482-578446949201153-6561470298862911488-n.jpg"),
        require("../assets/TourDeMeathPics/32325461-578448409201007-4655106398328193024-n.jpg"),
        require("../assets/TourDeMeathPics/32260618-578460052533176-2859283750422839296-n.jpg"),
        require("../assets/TourDeMeathPics/32325477-578449735867541-3546001840837492736-n.jpg"),
        require("../assets/TourDeMeathPics/32260766-578442742534907-6061391760347627520-n.jpg"),
        require("../assets/TourDeMeathPics/32325615-578455749200273-3311688246441803776-n.jpg"),
        require("../assets/TourDeMeathPics/32260809-578456965866818-8044614993997463552-n.jpg"),
        require("../assets/TourDeMeathPics/32325618-578447129201135-3199360235877695488-n.jpg"),
        require("../assets/TourDeMeathPics/32260818-578455052533676-1564225680453926912-n.jpg"),
        require("../assets/TourDeMeathPics/32325906-578459999199848-1456812310772318208-n.jpg"),
        require("../assets/TourDeMeathPics/32260818-578457529200095-6852781150113366016-n.jpg"),
        require("../assets/TourDeMeathPics/32326656-578445605867954-8442037869903609856-n.jpg"),
        require("../assets/TourDeMeathPics/32260830-578447342534447-4609750306731851776-n.jpg"),
        require("../assets/TourDeMeathPics/32327888-578448515867663-2424600418316189696-n.jpg"),
        require("../assets/TourDeMeathPics/32260881-578452959200552-8568720034833104896-n.jpg"),
        require("../assets/TourDeMeathPics/32331922-578455825866932-7215595398591676416-n.jpg"),
        require("../assets/TourDeMeathPics/32260887-578453605867154-418928683395317760-n.jpg"),
        require("../assets/TourDeMeathPics/32331999-578446535867861-2960587924262879232-n.jpg"),
        require("../assets/TourDeMeathPics/32260933-578455665866948-7426549726721343488-n.jpg"),
        require("../assets/TourDeMeathPics/32332027-578447095867805-7439018493523001344-n.jpg"),
        require("../assets/TourDeMeathPics/32260973-578446815867833-2725937990978240512-n.jpg"),
        require("../assets/TourDeMeathPics/32332056-578443915868123-5512573804108316672-n.jpg"),
        require("../assets/TourDeMeathPics/32261005-578454425867072-3054926958228930560-n.jpg"),
        require("../assets/TourDeMeathPics/32332087-578456929200155-3189749456278913024-n.jpg"),
        require("../assets/TourDeMeathPics/32261027-578459079199940-3283086852331929600-n.jpg"),
        require("../assets/TourDeMeathPics/32332091-578456539200194-579603345514168320-n.jpg"),
        require("../assets/TourDeMeathPics/32261056-578458902533291-3600182136016994304-n.jpg"),
        require("../assets/TourDeMeathPics/32332133-578448215867693-6389971782287228928-n.jpg"),
        require("../assets/TourDeMeathPics/32262770-578443622534819-6974823981564035072-n.jpg"),
        require("../assets/TourDeMeathPics/32332176-578455962533585-6536967025107927040-n.jpg"),
        require("../assets/TourDeMeathPics/32262781-578451709200677-9066171178644668416-n.jpg"),
        require("../assets/TourDeMeathPics/32332270-578456689200179-3264346587169554432-n.jpg"),
        require("../assets/TourDeMeathPics/32263013-578444199201428-1951536433818763264-n.jpg"),
        require("../assets/TourDeMeathPics/32332342-578447855867729-2120160878539046912-n.jpg"),
        require("../assets/TourDeMeathPics/32263112-578459739199874-3355328502898360320-n.jpg"),
        require("../assets/TourDeMeathPics/32332484-578447819201066-5648398421107671040-n.jpg"),
        require("../assets/TourDeMeathPics/32263918-578453502533831-6723089548844204032-n.jpg"),
        require("../assets/TourDeMeathPics/32332514-578451812534000-6724192320352157696-n.jpg"),
        require("../assets/TourDeMeathPics/32263922-578454775867037-3052437182867308544-n.jpg"),
        require("../assets/TourDeMeathPics/32332548-578456212533560-1690658836064501760-n.jpg"),
        require("../assets/TourDeMeathPics/32264014-578443505868164-7811518202491437056-n.jpg"),
        require("../assets/TourDeMeathPics/32332554-578457842533397-268200843411456000-n.jpg"),
        require("../assets/TourDeMeathPics/32266353-578452855867229-5348721931342315520-n.jpg"),
        require("../assets/TourDeMeathPics/32332585-578452925867222-5303412358536757248-n.jpg"),
        require("../assets/TourDeMeathPics/32266437-578450712534110-2113869236781711360-n.jpg"),
        require("../assets/TourDeMeathPics/32336634-578446452534536-9164465619792297984-n.jpg"),
        require("../assets/TourDeMeathPics/32266489-578459332533248-1669197107824689152-n.jpg"),
        require("../assets/TourDeMeathPics/32336651-578445569201291-3085647506382520320-n.jpg"),
        require("../assets/TourDeMeathPics/32266495-578446275867887-6571505734763151360-n.jpg"),
        require("../assets/TourDeMeathPics/32336680-578452115867303-58846283225366528-n.jpg"),
        require("../assets/TourDeMeathPics/32266522-578451499200698-4629009137655611392-n.jpg"),
        require("../assets/TourDeMeathPics/32336715-578457745866740-3092862553223593984-n.jpg"),
        require("../assets/TourDeMeathPics/32266541-578445725867942-2649386525413867520-n.jpg"),
        require("../assets/TourDeMeathPics/32336730-578447915867723-7208577937426087936-n.jpg"),
        require("../assets/TourDeMeathPics/32266758-578457632533418-7353783385770164224-n.jpg"),
        require("../assets/TourDeMeathPics/32336785-578449679200880-600117092867375104-n.jpg"),
        require("../assets/TourDeMeathPics/32266791-578459699199878-2892845312068550656-n.jpg"),
        require("../assets/TourDeMeathPics/32336928-578449989200849-5266296161697792000-n.jpg"),
        require("../assets/TourDeMeathPics/32266822-578452185867296-6815343328943407104-n.jpg"),
        require("../assets/TourDeMeathPics/32336968-578455455866969-8474728291922608128-n.jpg"),
        require("../assets/TourDeMeathPics/32266826-578445682534613-534453850434699264-n.jpg"),
        require("../assets/TourDeMeathPics/32337037-578457935866721-3448171711424364544-n.jpg"),
        require("../assets/TourDeMeathPics/32266838-578455625866952-996784050234458112-n.jpg"),
        require("../assets/TourDeMeathPics/32337056-578444972534684-5719368026915078144-n.jpg"),
        require("../assets/TourDeMeathPics/32266866-578448062534375-8670152318957649920-n.jpg"),
        require("../assets/TourDeMeathPics/32337085-578448585867656-1382555856687595520-n.jpg"),
        require("../assets/TourDeMeathPics/32266867-578458645866650-8015428745600958464-n.jpg"),
        require("../assets/TourDeMeathPics/32337156-578454619200386-595810181267324928-n.jpg"),
        require("../assets/TourDeMeathPics/32266886-578452669200581-5278653426853478400-n.jpg"),
        require("../assets/TourDeMeathPics/32337176-578454325867082-7056848304910368768-n.jpg"),
        require("../assets/TourDeMeathPics/32266965-578443145868200-3798519344879632384-n.jpg"),
        require("../assets/TourDeMeathPics/32337182-578456169200231-3082037448931278848-n.jpg"),
        require("../assets/TourDeMeathPics/32266967-578460012533180-7626500168250032128-n.jpg"),
        require("../assets/TourDeMeathPics/32337195-578458232533358-2623544218294943744-n.jpg"),
        require("../assets/TourDeMeathPics/32267021-578448935867621-2551953199439282176-n.jpg"),
        require("../assets/TourDeMeathPics/32337204-578458375866677-431347787490131968-n.jpg"),
        require("../assets/TourDeMeathPics/32267035-578448299201018-185643561868328960-n.jpg"),
        require("../assets/TourDeMeathPics/32337250-578459032533278-4545295638031499264-n.jpg"),
        require("../assets/TourDeMeathPics/32267083-578451535867361-1626431070486396928-n.jpg"),
        require("../assets/TourDeMeathPics/32337254-578448435867671-3698428331796987904-n.jpg"),
        require("../assets/TourDeMeathPics/32267098-578457895866725-5389820688146104320-n.jpg"),
        require("../assets/TourDeMeathPics/32337257-578444022534779-8990228348600844288-n.jpg"),
        require("../assets/TourDeMeathPics/32267108-578445649201283-8903470567567392768-n.jpg"),
        require("../assets/TourDeMeathPics/32349126-578455029200345-2259843213688832000-n.jpg"),
        require("../assets/TourDeMeathPics/32267135-578443179201530-1784950754239315968-n.jpg"),
        require("../assets/TourDeMeathPics/32349138-578455975866917-820804602868793344-n.jpg"),
        require("../assets/TourDeMeathPics/32267157-578446852534496-222214426709721088-n.jpg"),
        require("../assets/TourDeMeathPics/32349175-578443249201523-1916926165713420288-n.jpg"),
        require("../assets/TourDeMeathPics/32267157-578451305867384-2169013825133608960-n.jpg"),
        require("../assets/TourDeMeathPics/32349212-578449835867531-4427234623516311552-n.jpg"),
        require("../assets/TourDeMeathPics/32267160-578453119200536-8069243221235990528-n.jpg"),
        require("../assets/TourDeMeathPics/32349338-578448949200953-3417670412761300992-n.jpg"),
        require("../assets/TourDeMeathPics/32267201-578456802533501-8888563023845785600-n.jpg"),
        require("../assets/TourDeMeathPics/32349352-578447952534386-6990693636614651904-n.jpg"),
        require("../assets/TourDeMeathPics/32267222-578443599201488-6822455313749245952-n.jpg"),
        require("../assets/TourDeMeathPics/32349362-578443535868161-2389840474895548416-n.jpg"),
        require("../assets/TourDeMeathPics/32267227-578447202534461-7994586905696010240-n.jpg"),
        require("../assets/TourDeMeathPics/32349378-578450842534097-189056166788071424-n.jpg"),
        require("../assets/TourDeMeathPics/32267248-578457682533413-1303340991708659712-n.jpg"),
        require("../assets/TourDeMeathPics/32349392-578458332533348-4692137610649272320-n.jpg"),
        require("../assets/TourDeMeathPics/32267262-578452742533907-6046524645153177600-n.jpg"),
        require("../assets/TourDeMeathPics/32349526-578444089201439-2394130541633863680-n.jpg"),
        require("../assets/TourDeMeathPics/32267291-578450242534157-4547055552420642816-n.jpg"),
        require("../assets/TourDeMeathPics/32349673-578458539199994-8703282154785734656-n.jpg"),
        require("../assets/TourDeMeathPics/32267429-578454955867019-3095328835114106880-n.jpg"),
        require("../assets/TourDeMeathPics/32349676-578456749200173-3430983948090474496-n.jpg"),
        require("../assets/TourDeMeathPics/32267433-578453912533790-8597430332133736448-n.jpg"),
        require("../assets/TourDeMeathPics/32349756-578446315867883-6756139438151041024-n.jpg"),
        require("../assets/TourDeMeathPics/32267444-578459805866534-4959360867964551168-n.jpg"),
        require("../assets/TourDeMeathPics/32349881-578446922534489-2696720762982629376-n.jpg"),
        require("../assets/TourDeMeathPics/32267504-578442289201619-7352336411288141824-n.jpg"),
        require("../assets/TourDeMeathPics/32349892-578444419201406-3704672406791520256-n.jpg"),
        require("../assets/TourDeMeathPics/32271333-578447465867768-1990637996470173696-n.jpg"),
        require("../assets/TourDeMeathPics/32349943-578449935867521-7789619031832526848-n.jpg"),
        require("../assets/TourDeMeathPics/32271334-578453305867184-6503282627397550080-n.jpg"),
        require("../assets/TourDeMeathPics/32349965-578448035867711-8856064350641717248-n.jpg"),
        require("../assets/TourDeMeathPics/32271346-578458502533331-7297469398082650112-n.jpg"),
        require("../assets/TourDeMeathPics/32349968-578448645867650-4445402678775775232-n.jpg"),
        require("../assets/TourDeMeathPics/32271765-578455259200322-2270302429717200896-n.jpg"),
        require("../assets/TourDeMeathPics/32349986-578442872534894-5101896577522335744-n.jpg"),
        require("../assets/TourDeMeathPics/32271767-578447579201090-8980621550436745216-n.jpg"),
        require("../assets/TourDeMeathPics/32350020-578454355867079-7977413745250926592-n.jpg"),
        require("../assets/TourDeMeathPics/32280202-578459849199863-4214868423672332288-n.jpg"),
        require("../assets/TourDeMeathPics/32350027-578451385867376-3307182649654640640-n.jpg"),
        require("../assets/TourDeMeathPics/32280218-578444592534722-6817477068696059904-n.jpg"),
        require("../assets/TourDeMeathPics/32350049-578459355866579-6716111270665256960-n.jpg"),
        require("../assets/TourDeMeathPics/32281059-578449629200885-8198991533253328896-n.jpg"),
        require("../assets/TourDeMeathPics/32350091-578454082533773-2421086361973948416-n.jpg"),
        require("../assets/TourDeMeathPics/32281369-578453469200501-5614155419950776320-n.jpg"),
        require("../assets/TourDeMeathPics/32350119-578457015866813-1250442340540088320-n.jpg"),
        require("../assets/TourDeMeathPics/32283687-578447632534418-6284659158419505152-n.jpg"),
        require("../assets/TourDeMeathPics/32350140-578453372533844-1738723553081032704-n.jpg"),
        require("../assets/TourDeMeathPics/32283746-578442229201625-1741126041822298112-n.jpg"),
        require("../assets/TourDeMeathPics/32359559-578447229201125-989446085724340224-n.jpg"),
        require("../assets/TourDeMeathPics/32286546-578450269200821-583408617818947584-n.jpg"),
        require("../assets/TourDeMeathPics/32359613-578443675868147-5850159156991885312-n.jpg"),
        require("../assets/TourDeMeathPics/32286552-578445479201300-2760719074227912704-n.jpg"),
        require("../assets/TourDeMeathPics/32359643-578449882534193-4266971758566834176-n.jpg"),
        require("../assets/TourDeMeathPics/32286684-578451622534019-1440977900223332352-n.jpg"),
        require("../assets/TourDeMeathPics/32359649-578446402534541-8401865086574002176-n.jpg"),
        require("../assets/TourDeMeathPics/32286685-578448315867683-5228529363212828672-n.jpg"),
        require("../assets/TourDeMeathPics/32365606-578447415867773-4052544459752079360-n.jpg"),
        require("../assets/TourDeMeathPics/32287735-578450675867447-6849568579000467456-n.jpg"),
        require("../assets/TourDeMeathPics/32366354-578454905867024-35786376179875840-n.jpg"),
        require("../assets/TourDeMeathPics/32288008-578454192533762-4545188757770338304-n.jpg"),
        require("../assets/TourDeMeathPics/32366534-578450189200829-3214568848216817664-n.jpg"),
        require("../assets/TourDeMeathPics/32289093-578458559199992-2670042492019146752-n.jpg"),
        require("../assets/TourDeMeathPics/32367252-578451485867366-8168895430394904576-n.jpg"),
        require("../assets/TourDeMeathPics/32289436-578453399200508-4878547502057390080-n.jpg"),
        require("../assets/TourDeMeathPics/32369656-578459445866570-5091466223674195968-n.jpg"),
        require("../assets/TourDeMeathPics/32289445-578454862533695-4362365172644315136-n.jpg"),
        require("../assets/TourDeMeathPics/32370913-578457482533433-5154670064753967104-n.jpg"),
        require("../assets/TourDeMeathPics/32289448-578452649200583-6274752910840561664-n.jpg"),
        require("../assets/TourDeMeathPics/32370927-578457099200138-7011495932755705856-n.jpg"),
        require("../assets/TourDeMeathPics/32289450-578454132533768-3380448044330778624-n.jpg"),
        require("../assets/TourDeMeathPics/32370966-578453269200521-2537130154904256512-n.jpg"),
        require("../assets/TourDeMeathPics/32290111-578447442534437-8141378910664261632-n.jpg"),
        require("../assets/TourDeMeathPics/32372799-578455179200330-4256264057205555200-n.jpg"),
        require("../assets/TourDeMeathPics/32290121-578444335868081-7844724471557521408-n.jpg"),
        require("../assets/TourDeMeathPics/32372932-578444882534693-8208084511594905600-n.jpg"),
        require("../assets/TourDeMeathPics/32290678-578441685868346-8754250896759586816-n.jpg"),
        require("../assets/TourDeMeathPics/32374880-578454489200399-4250019857656971264-n.jpg"),
        require("../assets/TourDeMeathPics/32290710-578444542534727-6779305263385018368-n.jpg"),
        require("../assets/TourDeMeathPics/32374891-578448749200973-7871589010957664256-n.jpg"),
        require("../assets/TourDeMeathPics/32290761-578445012534680-7560892949370765312-n.jpg"),
        require("../assets/TourDeMeathPics/32377777-578445542534627-6472639186791825408-n.jpg"),
        require("../assets/TourDeMeathPics/32290766-578458155866699-7678723680624443392-n.jpg"),
        require("../assets/TourDeMeathPics/32378461-578457699200078-7301349978343997440-n.jpg"),
        require("../assets/TourDeMeathPics/32290836-578446559201192-6232347603510493184-n.jpg"),
        require("../assets/TourDeMeathPics/32379728-578445229201325-4124137037680869376-n.jpg"),
        require("../assets/TourDeMeathPics/32293384-578459135866601-2595200109905969152-n.jpg"),
        require("../assets/TourDeMeathPics/32383983-578453989200449-5938265373072687104-n.jpg"),
        require("../assets/TourDeMeathPics/32293404-578456565866858-2176593806755889152-n.jpg"),
        require("../assets/TourDeMeathPics/32384052-578453719200476-1990709241387679744-n.jpg"),
        require("../assets/TourDeMeathPics/32293416-578451685867346-8423184157475078144-n.jpg"),
        require("../assets/TourDeMeathPics/32387239-578445365867978-1880497644678152192-n.jpg"),
        require("../assets/TourDeMeathPics/32293463-578456885866826-7116479188466401280-n.jpg"),
        require("../assets/TourDeMeathPics/32387271-578448235867691-8727690084561715200-n.jpg"),
        require("../assets/TourDeMeathPics/32293464-578457302533451-3519854840148656128-n.jpg"),
        require("../assets/TourDeMeathPics/32387274-578452812533900-6861717147400273920-n.jpg"),
        require("../assets/TourDeMeathPics/32293500-578452235867291-1478993093846892544-n.jpg"),
        require("../assets/TourDeMeathPics/32387281-578459499199898-2630289142310764544-n.jpg"),
        require("../assets/TourDeMeathPics/32293539-578444132534768-3519515584976912384-n.jpg"),
        require("../assets/TourDeMeathPics/32387303-578455492533632-5978736708168974336-n.jpg"),
        require("../assets/TourDeMeathPics/32293566-578449755867539-2264063418489110528-n.jpg"),
        require("../assets/TourDeMeathPics/32387317-578452589200589-6804947858819645440-n.jpg"),
        require("../assets/TourDeMeathPics/32293632-578455345866980-5658698822130335744-n.jpg"),
        require("../assets/TourDeMeathPics/32389219-578456845866830-8492270557562142720-n.jpg"),
        require("../assets/TourDeMeathPics/32293634-578449332534248-8989258132668547072-n.jpg"),
        require("../assets/TourDeMeathPics/32389245-578453069200541-1768302340013555712-n.jpg"),
        require("../assets/TourDeMeathPics/32293673-578448159201032-2232627517762568192-n.jpg"),
        require("../assets/TourDeMeathPics/32389468-578453869200461-4323806901881012224-n.jpg"),
        require("../assets/TourDeMeathPics/32293696-578448692534312-2259069058718629888-n.jpg"),
        require("../assets/TourDeMeathPics/32389757-578445425867972-7482959539424198656-n.jpg"),
        require("../assets/TourDeMeathPics/32293710-578443825868132-4002070901737652224-n.jpg"),
        require("../assets/TourDeMeathPics/32392108-578456505866864-3049656006859554816-n.jpg"),
        require("../assets/TourDeMeathPics/32293747-578451989200649-7186855504671408128-n.jpg"),
        require("../assets/TourDeMeathPics/32399253-578451915867323-6000924814162788352-n.jpg"),
        require("../assets/TourDeMeathPics/32293762-578441632535018-7552647282177343488-n.jpg"),
        require("../assets/TourDeMeathPics/32399262-578452895867225-2270224141053329408-n.jpg"),
        require("../assets/TourDeMeathPics/32293847-578449129200935-4861414817384103936-n.jpg"),
        require("../assets/TourDeMeathPics/32402308-578447979201050-4339902983312506880-n.jpg"),
        require("../assets/TourDeMeathPics/32293883-578448772534304-3422858449787027456-n.jpg"),
        require("../assets/TourDeMeathPics/32402314-578455912533590-7106380174165278720-n.jpg"),
        require("../assets/TourDeMeathPics/32293893-578444449201403-5845041329796546560-n.jpg"),
        require("../assets/TourDeMeathPics/32402330-578452015867313-2763624147157254144-n.jpg"),
        require("../assets/TourDeMeathPics/32293917-578453952533786-4815458847705530368-n.jpg"),
        require("../assets/TourDeMeathPics/32405556-578453439200504-7791518382334935040-n.jpg"),
        require("../assets/TourDeMeathPics/32293957-578456069200241-2350568797179478016-n.jpg"),
        require("../assets/TourDeMeathPics/32405634-578452772533904-8573219691680497664-n.jpg"),
        require("../assets/TourDeMeathPics/32294015-578459589199889-9212844341867839488-n.jpg"),
        require("../assets/TourDeMeathPics/32414329-578444845868030-7926490980901978112-n.jpg"),
        require("../assets/TourDeMeathPics/32294044-578446142534567-575395153737416704-n.jpg"),
        require("../assets/TourDeMeathPics/32414371-578454542533727-5328882519624384512-n.jpg"),
        require("../assets/TourDeMeathPics/32294105-578455415866973-7637790043838349312-n.jpg"),
        require("../assets/TourDeMeathPics/32416457-578446752534506-112879029098381312-n.jpg"),
        require("../assets/TourDeMeathPics/32294158-578453842533797-6109380645421580288-n.jpg"),
        require("../assets/TourDeMeathPics/32416528-578451335867381-7692329093341118464-n.jpg"),
        require("../assets/TourDeMeathPics/32294161-578453685867146-1389889212697804800-n.jpg"),
        require("../assets/TourDeMeathPics/32419253-578454265867088-6483327844268113920-n.jpg"),
        require("../assets/TourDeMeathPics/32294180-578459592533222-6914865946054098944-n.jpg"),
        require("../assets/TourDeMeathPics/32419265-578445155867999-7895239085164331008-n.jpg"),
        require("../assets/TourDeMeathPics/32294194-578457122533469-7362893690009812992-n.jpg"),
        require("../assets/TourDeMeathPics/32423032-578449085867606-2394375230215684096-n.jpg"),
        require("../assets/TourDeMeathPics/32294196-578441529201695-4382785860941119488-n.jpg"),
        require("../assets/TourDeMeathPics/32423053-578458002533381-1900524222480908288-n.jpg"),
        require("../assets/TourDeMeathPics/32294238-578458752533306-511280689396580352-n.jpg"),
        require("../assets/TourDeMeathPics/32423118-578459622533219-5045458821762252800-n.jpg"),
        require("../assets/TourDeMeathPics/32294259-578443479201500-8231741504993886208-n.jpg"),
        require("../assets/TourDeMeathPics/32423172-578446689201179-2015345560344592384-n.jpg"),
        require("../assets/TourDeMeathPics/32294296-578455592533622-7787821699688300544-n.jpg"),
        require("../assets/TourDeMeathPics/32423192-578446712534510-8942804337625661440-n.jpg"),
        require("../assets/TourDeMeathPics/32294391-578454215867093-8249249565513875456-n.jpg"),
        require("../assets/TourDeMeathPics/32423198-578446012534580-3692406242187149312-n.jpg"),
        require("../assets/TourDeMeathPics/32294438-578456609200187-4782410066500255744-n.jpg"),
        require("../assets/TourDeMeathPics/32423208-578457985866716-543173523103809536-n.jpg"),
        require("../assets/TourDeMeathPics/32294468-578450322534149-4935738749700014080-n.jpg"),
        require("../assets/TourDeMeathPics/32423279-578458095866705-1309713391736061952-n.jpg"),
        require("../assets/TourDeMeathPics/32294475-578459295866585-2964839748612390912-n.jpg"),
        require("../assets/TourDeMeathPics/32430359-578451429200705-3797361829718523904-n.jpg"),
        require("../assets/TourDeMeathPics/32294494-578453642533817-251838409583099904-n.jpg"),
        require("../assets/TourDeMeathPics/32440408-578444289201419-6206651475603488768-n.jpg"),
        require("../assets/TourDeMeathPics/32294501-578449039200944-3308167305266987008-n.jpg"),
        require("../assets/TourDeMeathPics/32440529-578453769200471-1741696744191688704-n.jpg"),
        require("../assets/TourDeMeathPics/32294516-578450915867423-2526872518870958080-n.jpg"),
        require("../assets/TourDeMeathPics/32440548-578457805866734-3486440389722767360-n.jpg"),
        require("../assets/TourDeMeathPics/32294561-578446612534520-3618843867702362112-n.jpg"),
        require("../assets/TourDeMeathPics/32440640-578456425866872-980823535150694400-n.jpg"),
        require("../assets/TourDeMeathPics/32294564-578454569200391-8924614403802791936-n.jpg"),
        require("../assets/TourDeMeathPics/32440727-578443369201511-2480330732833079296-n.jpg"),
        require("../assets/TourDeMeathPics/32294591-578454755867039-5953222377637675008-n.jpg"),
        require("../assets/TourDeMeathPics/32440733-578454049200443-7335534189988544512-n.jpg"),
        require("../assets/TourDeMeathPics/32294629-578444489201399-7799374470224805888-n.jpg"),
        require("../assets/TourDeMeathPics/32440736-578459219199926-6548886512837066752-n.jpg"),
        require("../assets/TourDeMeathPics/32294633-578457062533475-4557542359318921216-n.jpg"),
        require("../assets/TourDeMeathPics/32440747-578456092533572-403451871823396864-n.jpg"),
        require("../assets/TourDeMeathPics/32294648-578445052534676-5906173188458414080-n.jpg"),
        require("../assets/TourDeMeathPics/32446723-578452135867301-5347458686971281408-n.jpg"),
        require("../assets/TourDeMeathPics/32294651-578451599200688-2151619314958991360-n.jpg"),
        require("../assets/TourDeMeathPics/32451902-578456465866868-8087203425848131584-n.jpg"),
        require("../assets/TourDeMeathPics/32294672-578458419200006-404744596849950720-n.jpg"),
        require("../assets/TourDeMeathPics/32453884-578459265866588-6446880524160991232-n.jpg"),
        require("../assets/TourDeMeathPics/32294681-578456125866902-9182734877366157312-n.jpg"),
        require("../assets/TourDeMeathPics/32454259-578447525867762-2148613430557278208-n.jpg"),
        require("../assets/TourDeMeathPics/32294683-578446032534578-547467730190598144-n.jpg"),
        require("../assets/TourDeMeathPics/32454413-578448849200963-460941933225705472-n.jpg"),
        require("../assets/TourDeMeathPics/32294685-578453015867213-2340026993224974336-n.jpg"),
        require("../assets/TourDeMeathPics/32454705-578449182534263-5048375370844209152-n.jpg"),
        require("../assets/TourDeMeathPics/32294706-578445265867988-181448873468755968-n.jpg"),
        require("../assets/TourDeMeathPics/32456134-578449589200889-6636599185359503360-n.jpg"),
        require("../assets/TourDeMeathPics/32294719-578455382533643-4332604622695825408-n.jpg"),
        require("../assets/TourDeMeathPics/32456135-578459479199900-8035722019397959680-n.jpg"),
        require("../assets/TourDeMeathPics/32294725-578444669201381-4913341156676337664-n.jpg"),
        require("../assets/TourDeMeathPics/32456692-578453802533801-5488574703679307776-n.jpg"),
        require("../assets/TourDeMeathPics/32308790-578451865867328-2155582629175361536-n.jpg"),
        require("../assets/TourDeMeathPics/32458533-578456312533550-5095430869330427904-n.jpg"),
        require("../assets/TourDeMeathPics/32308801-578446242534557-4831173737904603136-n.jpg"),
        require("../assets/TourDeMeathPics/32458570-578448472534334-1952445072804937728-n.jpg"),
        require("../assets/TourDeMeathPics/32308830-578450509200797-3925734197422981120-n.jpg"),
        require("../assets/TourDeMeathPics/32459406-578458192533362-9128505228717457408-n.jpg"),
        require("../assets/TourDeMeathPics/32308830-578459162533265-6691721177888456704-n.jpg"),
        require("../assets/TourDeMeathPics/32460626-578449452534236-3470159169431011328-n.jpg"),
        require("../assets/TourDeMeathPics/32312916-578457505866764-4337943305699459072-n.jpg"),
        require("../assets/TourDeMeathPics/32462447-578458855866629-4667502120621047808-n.jpg"),
        require("../assets/TourDeMeathPics/32312917-578450755867439-432743523012313088-n.jpg"),
        require("../assets/TourDeMeathPics/32462812-578454649200383-2254703121383030784-n.jpg"),
        require("../assets/TourDeMeathPics/32312919-578451829200665-1808224254303404032-n.jpg"),
        require("../assets/TourDeMeathPics/32463081-578457232533458-361564687873081344-n.jpg"),
        require("../assets/TourDeMeathPics/32312952-578443282534853-3703556930770305024-n.jpg"),
        require("../assets/TourDeMeathPics/32464462-578455785866936-875314025687154688-n.jpg"),
        require("../assets/TourDeMeathPics/32312963-578443392534842-2491445146122452992-n.jpg"),
        require("../assets/TourDeMeathPics/32468748-578449522534229-2044745466184204288-n.jpg"),
        require("../assets/TourDeMeathPics/32312981-578444052534776-973774948357111808-n.jpg"),
        require("../assets/TourDeMeathPics/32472075-578446379201210-2616080926639128576-n.jpg"),
        require("../assets/TourDeMeathPics/32312984-578448629200985-4066292272109453312-n.jpg"),
        require("../assets/TourDeMeathPics/32475804-578445802534601-916008544464011264-n.jpg"),
        require("../assets/TourDeMeathPics/32312996-578455862533595-8156908262571114496-n.jpg"),
        require("../assets/TourDeMeathPics/32479840-578445105868004-7024192715076141056-n.jpg"),
        require("../assets/TourDeMeathPics/32313022-578448542534327-4550394524421062656-n.jpg"),
        require("../assets/TourDeMeathPics/32480638-578458722533309-2456232165256462336-n.jpg"),
        require("../assets/TourDeMeathPics/32313028-578444759201372-862356229614206976-n.jpg"),
        require("../assets/TourDeMeathPics/32482802-578450615867453-3715663305411395584-n.jpg"),
        require("../assets/TourDeMeathPics/32313051-578444239201424-8240534690323234816-n.jpg"),
        require("../assets/TourDeMeathPics/32482814-578446102534571-1485272722580701184-n.jpg"),
        require("../assets/TourDeMeathPics/32313067-578454689200379-87281565180100608-n.jpg"),
        require("../assets/TourDeMeathPics/32482913-578442825868232-4905526927537733632-n.jpg"),
        require("../assets/TourDeMeathPics/32313104-578459889199859-2492453329565646848-n.jpg"),
        require("../assets/TourDeMeathPics/32488050-578451935867321-4438448426643881984-n.jpg"),
        require("../assets/TourDeMeathPics/32313118-578446179201230-1207772862656544768-n.jpg"),
        require("../assets/TourDeMeathPics/32492020-578448355867679-2622338255902736384-n.jpg"),
        require("../assets/TourDeMeathPics/32313205-578458355866679-7155168966833340416-n.jpg"),
        require("../assets/TourDeMeathPics/32492066-578447285867786-7262933948307603456-n.jpg"),
        require("../assets/TourDeMeathPics/32313233-578452549200593-6863145056522469376-n.jpg"),
        require("../assets/TourDeMeathPics/32498320-578457782533403-7065308647454146560-n.jpg"),
        require("../assets/TourDeMeathPics/32313233-578453565867158-8435330900513783808-n.jpg"),
        require("../assets/TourDeMeathPics/32498332-578447712534410-1015739033696862208-n.jpg"),
        require("../assets/TourDeMeathPics/32313243-578450809200767-2294123130089635840-n.jpg"),
        require("../assets/TourDeMeathPics/32503777-578450389200809-2125552466949832704-n.jpg"),
        require("../assets/TourDeMeathPics/32313288-578454839200364-5263060230257770496-n.jpg"),
        require("../assets/TourDeMeathPics/32511946-578456259200222-1657824859058601984-n.jpg"),
        require("../assets/TourDeMeathPics/32313334-578456369200211-7950247956844642304-n.jpg"),
        require("../assets/TourDeMeathPics/32511965-578454452533736-7359681655767826432-n.jpg"),
        require("../assets/TourDeMeathPics/32313354-578457385866776-1999569965077757952-n.jpg"),
        require("../assets/TourDeMeathPics/32543023-578450085867506-7208824837916065792-n.jpg"),
        require("../assets/TourDeMeathPics/32313354-578459392533242-6992412920613175296-n.jpg")
      ]
    };
  }
};
</script>

<style>
@media screen and (min-width: 20em) {
  main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  main img {
    width: 100vw;
  }

  main h1 {
    font-size: 1.4em;
    text-align: center;
    font-family: cursive;
  }

  main p {
    text-align: center;
    font-family: fantasy;
  }

  main img {
    width: 100vw;
  }

  main .Gallery {
    margin: 3vh auto;
    flex-wrap: wrap;
    flex-direction: row;
    display: flex;
    width: 100vw;
    justify-content: center;
  }

  main .Gallery h2 {
    width: 100vw;
    color: rgb(255, 187, 0);
    text-align: center;
  }

  main .GPic img {
    width: 100vw;
  }

  main aside {
    width: 100vw;
    border-top: 2px solid black;
  }

  main aside h2 {
    font-size: 1.4em;
    font-family: Caveat;
    text-align: center;
    width: 100vw;
  }
}

@media screen and (min-width: 45em) {
  main .GPic img {
    width: 20vw;
  }
}
</style>
