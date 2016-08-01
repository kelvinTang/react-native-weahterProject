import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from "react-native";

import BookItem from "./BookItem";

const API_KEY = '73b19491b83909c7e07016f4bb4644f9:2:60667290';
const QUERY_TYPE = 'hardcover-fiction';
const API_STEM = 'http://api.nytimes.com/svc/books/v3/lists';
const ENDPOINT = `${API_STEM}/${QUERY_TYPE}?response-format=json&api-key=${API_KEY}`;
const BOOK_DATA = `{"status":"OK","copyright":"Copyright (c) 2016 The New York Times Company.  All Rights Reserved.","num_results":20,"last_modified":"2016-07-29T09:38:01-04:00","results":{"list_name":"Hardcover Fiction","list_name_encoded":"hardcover-fiction","bestsellers_date":"2016-07-23","published_date":"2016-08-07","published_date_description":"latest","next_published_date":"","previous_published_date":"2016-07-31","display_name":"Hardcover Fiction","normal_list_ends_at":16,"updated":"WEEKLY","books":[{"rank":1,"rank_last_week":1,"weeks_on_list":2,"asterisk":0,"dagger":0,"primary_isbn10":"006232022X","primary_isbn13":"9780062320223","publisher":"Harper","description":"Gabriel Allon, the Israeli art restorer and spy, recruits and trains a doctor from Jerusalem to help capture a secret ISIS terrorist in France.","price":0,"title":"THE BLACK WIDOW","author":"Daniel Silva","contributor":"by Daniel Silva","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9780062320247.jpg","book_image_width":331,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Black-Widow-Gabriel-Allon-Book-ebook\/dp\/B016UE6KTO?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"006232022X","isbn13":"9780062320223"},{"isbn10":"0062320246","isbn13":"9780062320247"}]},{"rank":2,"rank_last_week":2,"weeks_on_list":6,"asterisk":0,"dagger":0,"primary_isbn10":"081299860X","primary_isbn13":"9780812998603","publisher":"Random House","description":"In the summer of 1969, a California teenager is drawn to a Manson-like cult.","price":0,"title":"THE GIRLS","author":"Emma Cline","contributor":"by Emma Cline","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9780812998610.jpg","book_image_width":333,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Girls-Novel-Emma-Cline-ebook\/dp\/B015LYZH20?tag=thenewyorktim-20","age_group":"","book_review_link":"\/\/www.nytimes.com\/2016\/06\/05\/books\/review\/the-girls-by-emma-cline.html","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"081299860X","isbn13":"9780812998603"},{"isbn10":"0812998618","isbn13":"9780812998610"},{"isbn10":"0735208182","isbn13":"9780735208186"}]},{"rank":3,"rank_last_week":3,"weeks_on_list":4,"asterisk":0,"dagger":0,"primary_isbn10":"034554692X","primary_isbn13":"9780345546920","publisher":"Ballantine","description":"Two sisters \u2014 one a successful lawyer with a small child and an unhappy marriage, the other a single teacher who yearns to be a mother \u2014 struggle toward forgiveness after 15 years of estrangement.","price":0,"title":"FIRST COMES LOVE","author":"Emily Giffin","contributor":"by Emily Giffin","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9780345546937.jpg","book_image_width":329,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/First-Comes-Love-Emily-Giffin-ebook\/dp\/B014NZ4SXW?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"034554692X","isbn13":"9780345546920"},{"isbn10":"0345546938","isbn13":"9780345546937"}]},{"rank":4,"rank_last_week":0,"weeks_on_list":1,"asterisk":0,"dagger":0,"primary_isbn10":"1501132938","primary_isbn13":"9781501132933","publisher":"Scout","description":"A travel writer on a cruise is certain she has heard a body thrown overboard, but no one believes her.","price":0,"title":"THE WOMAN IN CABIN 10","author":"Ruth Ware","contributor":"by Ruth Ware","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9781501132940.jpg","book_image_width":333,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Woman-Cabin-10-Ruth-Ware-ebook\/dp\/B019DKO5BM?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"1501132938","isbn13":"9781501132933"},{"isbn10":"1501132946","isbn13":"9781501132940"}]},{"rank":5,"rank_last_week":4,"weeks_on_list":3,"asterisk":0,"dagger":0,"primary_isbn10":"0345531108","primary_isbn13":"9780345531100","publisher":"Delacorte","description":"A year in the intertwined lives of three international couples who participate in a special dinner in Paris.","price":0,"title":"MAGIC","author":"Danielle Steel","contributor":"by Danielle Steel","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9781101885574.jpg","book_image_width":328,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Magic-Novel-Danielle-Steel-ebook\/dp\/B017G7JXRK?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0345531108","isbn13":"9780345531100"},{"isbn10":"1101885572","isbn13":"9781101885574"}]},{"rank":6,"rank_last_week":7,"weeks_on_list":71,"asterisk":0,"dagger":0,"primary_isbn10":"0312577222","primary_isbn13":"9780312577223","publisher":"St. Martin's","description":"Two sisters in World War II France: one struggling to survive in the countryside, the other joining the Resistance in Paris.","price":0,"title":"THE NIGHTINGALE","author":"Kristin Hannah","contributor":"by Kristin Hannah","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9781466850606.jpg","book_image_width":128,"book_image_height":195,"amazon_product_url":"http:\/\/www.amazon.com\/The-Nightingale-Kristin-Hannah\/dp\/0312577222?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0312577222","isbn13":"9780312577223"},{"isbn10":"1466850604","isbn13":"9781466850606"},{"isbn10":"1628995017","isbn13":"9781628995015"},{"isbn10":"1250080401","isbn13":"9781250080400"}]},{"rank":7,"rank_last_week":5,"weeks_on_list":4,"asterisk":0,"dagger":0,"primary_isbn10":"0316407119","primary_isbn13":"9780316407113","publisher":"Little, Brown","description":"Hired by Olympic organizers to protect the Rio games, Jack Morgan of Private, an international security and consulting firm, encounters dangerous threats.","price":0,"title":"THE GAMES","author":"James Patterson and Mark Sullivan","contributor":"by James Patterson and Mark Sullivan","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9780316407113.jpg","book_image_width":322,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Games-Private-James-Patterson\/dp\/0316407119?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0316407119","isbn13":"9780316407113"},{"isbn10":"031629019X","isbn13":"9780316290197"}]},{"rank":8,"rank_last_week":8,"weeks_on_list":116,"asterisk":0,"dagger":0,"primary_isbn10":"1476746583","primary_isbn13":"9781476746586","publisher":"Scribner","description":"The lives of a blind French girl and a gadget-obsessed German boy before and during World War II. \u00a0","price":0,"title":"ALL THE LIGHT WE CANNOT SEE","author":"Anthony Doerr","contributor":"by Anthony Doerr","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9781476746586.jpg","book_image_width":128,"book_image_height":192,"amazon_product_url":"http:\/\/www.amazon.com\/All-Light-We-Cannot-See\/dp\/1476746583?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"\/\/www.nytimes.com\/2014\/05\/11\/books\/review\/all-the-light-we-cannot-see-by-anthony-doerr.html","article_chapter_link":"","isbns":[{"isbn10":"1476746583","isbn13":"9781476746586"},{"isbn10":"1410470229","isbn13":"9781410470225"},{"isbn10":"1476746591","isbn13":"9781476746593"},{"isbn10":"1501122835","isbn13":"9781501122835"},{"isbn10":"0007548699","isbn13":"9780007548699"}]},{"rank":9,"rank_last_week":6,"weeks_on_list":7,"asterisk":0,"dagger":0,"primary_isbn10":"1501129740","primary_isbn13":"9781501129742","publisher":"Scribner","description":"The conclusion of the Bill Hodges trilogy.","price":0,"title":"END OF WATCH","author":"Stephen King","contributor":"by Stephen King","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9781501134159.jpg","book_image_width":329,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/End-Watch-Novel-Hodges-Trilogy-ebook\/dp\/B0167CNCFY?tag=thenewyorktim-20","age_group":"","book_review_link":"\/\/www.nytimes.com\/2016\/06\/12\/books\/review\/stephen-kings-end-of-watch.html","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"1501129740","isbn13":"9781501129742"},{"isbn10":"1501134159","isbn13":"9781501134159"}]},{"rank":10,"rank_last_week":11,"weeks_on_list":8,"asterisk":0,"dagger":0,"primary_isbn10":"1455561789","primary_isbn13":"9781455561780","publisher":"Grand Central","description":"After a private jet crashes, a firestorm of media madness ensues.","price":0,"title":"BEFORE THE FALL","author":"Noah Hawley","contributor":"by Noah Hawley","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9781455561803.jpg","book_image_width":332,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Before-Fall-Noah-Hawley-ebook\/dp\/B0151YQUTE?tag=thenewyorktim-20","age_group":"","book_review_link":"\/\/www.nytimes.com\/2016\/06\/05\/books\/review\/noah-hawleys-before-the-fall.html","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"1455561789","isbn13":"9781455561780"},{"isbn10":"1455566144","isbn13":"9781455566143"},{"isbn10":"1455561800","isbn13":"9781455561803"},{"isbn10":"1455568554","isbn13":"9781455568550"}]},{"rank":11,"rank_last_week":10,"weeks_on_list":6,"asterisk":1,"dagger":0,"primary_isbn10":"0316375144","primary_isbn13":"9780316375146","publisher":"Little, Brown","description":"Sparks fly as a celebrity chef\u2019s ex-wives pile into a small cabin in Nantucket to join his widow for the reading of his will.","price":0,"title":"HERE'S TO US","author":"Elin Hilderbrand","contributor":"by Elin Hilderbrand","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9780316375153.jpg","book_image_width":333,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Heres-Us-Elin-Hilderbrand-ebook\/dp\/B0169ATKUK?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0316375144","isbn13":"9780316375146"},{"isbn10":"0316269948","isbn13":"9780316269940"},{"isbn10":"0316375152","isbn13":"9780316375153"}]},{"rank":12,"rank_last_week":15,"weeks_on_list":3,"asterisk":0,"dagger":0,"primary_isbn10":"1455541168","primary_isbn13":"9781455541164","publisher":"Grand Central","description":"Two families, one aristocratic and one wealthy, in Victorian London, from the creator of \u201cDownton Abbey.\u201d","price":0,"title":"BELGRAVIA","author":"Julian Fellowes","contributor":"by Julian Fellowes","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9781455541164.jpg","book_image_width":333,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Julian-Fellowess-Belgravia-Fellowes\/dp\/1455541168?tag=thenewyorktim-20","age_group":"","book_review_link":"\/\/www.nytimes.com\/2016\/07\/17\/books\/review\/belgravia-by-downton-abbey-creator-julian-fellowes.html","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"1455541168","isbn13":"9781455541164"}]},{"rank":13,"rank_last_week":16,"weeks_on_list":16,"asterisk":0,"dagger":0,"primary_isbn10":"0062414216","primary_isbn13":"9780062414212","publisher":"Ecco\/HarperCollins","description":"Siblings in a dysfunctional New York family must grapple with a reduced inheritance.","price":0,"title":"THE NEST","author":"Cynthia D'Aprix Sweeney","contributor":"by Cynthia D'Aprix Sweeney","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9780062414236.jpg","book_image_width":331,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/The-Nest-Cynthia-DAprix-Sweeney-ebook\/dp\/B010LU8V8Q?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0062414216","isbn13":"9780062414212"},{"isbn10":"0062414232","isbn13":"9780062414236"},{"isbn10":"0062441655","isbn13":"9780062441652"}]},{"rank":14,"rank_last_week":0,"weeks_on_list":1,"asterisk":1,"dagger":0,"primary_isbn10":"0525954627","primary_isbn13":"9780525954620","publisher":"Dutton","description":"Nick Heller, a Boston-based private intelligence operative, is called in when a slander site prepares to defame a Supreme Court justice.","price":0,"title":"GUILTY MINDS","author":"Joseph Finder","contributor":"by Joseph Finder","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9780525954620.jpg","book_image_width":331,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Guilty-Minds-Joseph-Finder\/dp\/0525954627?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0525954627","isbn13":"9780525954620"}]},{"rank":15,"rank_last_week":0,"weeks_on_list":1,"asterisk":0,"dagger":0,"primary_isbn10":"0399583289","primary_isbn13":"9780399583285","publisher":"Berkley","description":"An Englishwoman turned New York banker moves to Westport, Conn., where she finds a new career as a decorator and a new love in the salt-of-the-earth bartender who lives next door.","price":0,"title":"FALLING","author":"Jane Green","contributor":"by Jane Green","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9780399583285.jpg","book_image_width":331,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Falling-Jane-Green\/dp\/0399583289?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0399583289","isbn13":"9780399583285"}]},{"rank":16,"rank_last_week":0,"weeks_on_list":1,"asterisk":1,"dagger":0,"primary_isbn10":"0399165215","primary_isbn13":"9780399165214","publisher":"Blue Rider","description":"Relationships unravel as two couples vacation together in Sicily.","price":0,"title":"SIRACUSA","author":"Delia Ephron","contributor":"by Delia Ephron","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9780399165214.jpg","book_image_width":331,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Siracusa-Delia-Ephron\/dp\/0399165215?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"0399165215","isbn13":"9780399165214"}]},{"rank":17,"rank_last_week":0,"weeks_on_list":0,"asterisk":0,"dagger":0,"primary_isbn10":"1101875941","primary_isbn13":"9781101875940","publisher":"Knopf","description":"A woman moves to New York and experiences a sensual awakening while working at a famous restaurant.","price":0,"title":"SWEETBITTER","author":"Stephanie Danler","contributor":"by Stephanie Danler","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9781101875957.jpg","book_image_width":333,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Sweetbitter-novel-Stephanie-Danler-ebook\/dp\/B014NZJOF4?tag=thenewyorktim-20","age_group":"","book_review_link":"\/\/www.nytimes.com\/2016\/05\/29\/books\/review\/sweetbitter-by-stephanie-danler.html","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"1101875941","isbn13":"9781101875940"},{"isbn10":"110187595X","isbn13":"9781101875957"}]},{"rank":18,"rank_last_week":0,"weeks_on_list":0,"asterisk":0,"dagger":0,"primary_isbn10":"1250075831","primary_isbn13":"9781250075833","publisher":"St. Martin's","description":"A forensic sculptor hunts down lost treasure as well as the people who have snatched her young charge.","price":0,"title":"NIGHT AND DAY","author":"Iris Johansen","contributor":"by Iris Johansen","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9781466887213.jpg","book_image_width":329,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Night-Day-Eve-Duncan-Novel-ebook\/dp\/B01AGGSQ1C?tag=thenewyorktim-20","age_group":"","book_review_link":"","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"1250075831","isbn13":"9781250075833"},{"isbn10":"1466887214","isbn13":"9781466887213"}]},{"rank":19,"rank_last_week":0,"weeks_on_list":0,"asterisk":0,"dagger":0,"primary_isbn10":"1594633665","primary_isbn13":"9781594633669","publisher":"Riverhead","description":"A psychological thriller set in the environs of London is full of complications and betrayals.","price":0,"title":"THE GIRL ON THE TRAIN","author":"Paula Hawkins","contributor":"by Paula Hawkins","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9781594633669.jpg","book_image_width":128,"book_image_height":193,"amazon_product_url":"http:\/\/www.amazon.com\/The-Girl-Train-A-Novel-ebook\/dp\/B00L9B7IKE?tag=thenewyorktim-20","age_group":"","book_review_link":"\/\/www.nytimes.com\/2015\/01\/05\/books\/the-girl-on-the-train-by-paula-hawkins.html","first_chapter_link":"","sunday_review_link":"\/\/www.nytimes.com\/2015\/02\/01\/books\/review\/the-girl-on-the-train-by-paula-hawkins.html","article_chapter_link":"","isbns":[{"isbn10":"1594633665","isbn13":"9781594633669"},{"isbn10":"0698185390","isbn13":"9780698185395"},{"isbn10":"1410477762","isbn13":"9781410477767"},{"isbn10":"0857522329","isbn13":"9780857522320"},{"isbn10":"1448171687","isbn13":"9781448171682"},{"isbn10":"1594634122","isbn13":"9781594634123"},{"isbn10":"038568231X","isbn13":"9780385682312"},{"isbn10":"1594634025","isbn13":"9781594634024"}]},{"rank":20,"rank_last_week":0,"weeks_on_list":0,"asterisk":0,"dagger":0,"primary_isbn10":"1101947136","primary_isbn13":"9781101947135","publisher":"Knopf","description":"This Ghanaian-American writer\u2019s first novel traces the lives in West Africa and America of seven generations of the descendants of two half sisters.","price":0,"title":"HOMEGOING","author":"Yaa Gyasi","contributor":"by Yaa Gyasi","contributor_note":"","book_image":"https:\/\/s1.nyt.com\/du\/books\/images\/9781101947135.jpg","book_image_width":331,"book_image_height":500,"amazon_product_url":"http:\/\/www.amazon.com\/Homegoing-novel-Yaa-Gyasi\/dp\/1101947136?tag=thenewyorktim-20","age_group":"","book_review_link":"\/\/www.nytimes.com\/2016\/06\/12\/books\/review\/isabel-wilkerson-reviews-yaa-gyasis-homegoing.html","first_chapter_link":"","sunday_review_link":"","article_chapter_link":"","isbns":[{"isbn10":"1101947136","isbn13":"9781101947135"}]}],"corrections":[]}}`;

export default class BookList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  renderRow(rowData) {
    return <BookItem coverURL={rowData.book_image} title={rowData.title} author={rowData.author} />;
  }

  renderHeader() {
    return (
      <View style={styles.sectionDivider}>
        <Text style={styles.headingText}>
          Bestsellers in Hardcover Fiction
        </Text>
      </View>
    );
  }

  renderFooter() {
    return(
      <View style={styles.sectionDivider}>
        <Text>Data from the New York Times bestsellers list.</Text>
      </View>
    );
  }

  refreshData() {
    // fetch(ENDPOINT)
    //   .then((response) => response.json())
    //   .then((rjson) => {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(rjson.results.books)
    //     });
    //   });
    const data = JSON.parse(BOOK_DATA);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data.results.books)
    });
  }

  render() {
    return (
      <ListView
        style={{marginTop: 24}}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderHeader={this.renderHeader}
        renderFooter={this.renderFooter}
        enableEmptySections={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 24
  },
  list: {
    flex: 1,
    flexDirection: 'row'
  },
  listContent: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  },
  sectionDivider: {
    padding: 8,
    backgroundColor: '#EEEEEE',
    alignItems: 'center'
  },
  headingText: {
    flex: 1,
    fontSize: 24,
    alignSelf: 'center'
  }
});