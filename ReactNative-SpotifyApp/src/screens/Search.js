import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, ArtistCard } from '../components';
import * as actions from '../actions';
import theme from '../theme';

const mapStateToProps = ({ artists, loading }) => ({
  artists,
  loading,
});

export class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
    this.inputRef = React.createRef();

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(search) {
    const { getArtists } = this.props;

    this.setState({
      search,
    });
    getArtists(search);
  }

  render() {
    const { artists, navigation } = this.props;
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Rechercher un artiste</Text>
          <Input
            placeholder="Rechercher un artiste"
            value={search}
            onChange={this.onSearchChange}
            returnKeyType="search"
          />
        </View>
        {artists.artists && (
          <FlatList
            style={styles.flatList}
            data={artists.artists.items}
            renderItem={({ item }) => (
              <ArtistCard
                artistName={item.name}
                artistImages={item.images}
                onPress={() => navigation.navigate('ArtistDetails', item)}
              />
            )}
            keyExtractor={(item, index) => `Artists-${index}`}
          />
        )}
      </View>
    );
  }
}

export default connect(mapStateToProps, actions)(SearchScreen);

SearchScreen.propTypes = {
  artists: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  getArtists: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    paddingHorizontal: 10,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  flatList: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  headerContainer: {
    marginTop: 40,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
});
