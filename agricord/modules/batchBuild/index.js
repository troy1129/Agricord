import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {BasicStyles} from 'common';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

class BatchBuild extends Component {
  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.isModalOn}
        style={styles.ModalContainer}
        onRequestClose={() => {
          this.props.closeModal();
        }}
        collapsable={true}>
        <View style={styles.BatchBuildContainer}>
          <TouchableOpacity
            style={styles.IconContainer}
            onPress={() => {
              this.props.closeModal();
            }}>
            <FontAwesomeIcon
              color="#9E9E9E"
              icon={faTimes}
              size={25}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
          <View style={styles.TitleContainer}>
            <Text style={styles.TitleTextStyle}>{this.props.productName}</Text>
          </View>
          <View style={styles.DetailsContainer}>
            <View style={styles.DetailContainer}>
              <View style={styles.DetailTitleContainer}>
                <Text style={styles.DetailTitleTextStyle}>Batch</Text>
              </View>
              <View style={styles.DetailDetailContainer}>
                <Text style={styles.DetailDetailTextStyle}>
                  {this.props.batch}
                </Text>
              </View>
            </View>
            <View style={styles.DetailContainer}>
              <View style={styles.DetailTitleContainer}>
                <Text style={styles.DetailTitleTextStyle}>
                  Manufacture Date
                </Text>
              </View>
              <View style={styles.DetailDetailContainer}>
                <Text style={styles.DetailDetailTextStyle}>
                  {this.props.manufactureDate}
                </Text>
              </View>
            </View>
            <View style={styles.DetailContainer}>
              <View style={styles.DetailTitleContainer}>
                <Text style={styles.DetailTitleTextStyle}>
                  Volume Remaining
                </Text>
              </View>
              <View style={styles.DetailDetailContainer}>
                <Text style={styles.DetailDetailTextStyle}>
                  {this.props.volumeRemaining}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.AddToBatchContainer}>
            <Text style={styles.AddToBatchTextStyle}>Add to Batch</Text>
          </View>
          {/*Slider here*/}
          <View style={styles.SwipeTextContainer}>
            <Text style={styles.SwipeTextStyle}>Swipe Right to Confirm</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  IconContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  ModalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  BatchBuildContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: 120,
    marginHorizontal: 50,
    elevation: 10,
    borderRadius: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  TitleTextStyle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  DetailsContainer: {
    width: '100%',
    paddingHorizontal: '12%',
    paddingTop: 20,
  },
  DetailContainer: {
    flexDirection: 'row',
  },
  DetailTitleContainer: {
    width: '60%',
    paddingTop: 20,
  },
  DetailTitleTextStyle: {
    fontSize: BasicStyles.titleText.fontSize,
    color: '#969696',
  },
  DetailDetailContainer: {
    paddingTop: 20,
    width: '40%',
  },
  DetailDetailTextStyle: {
    fontSize: BasicStyles.titleText.fontSize,
  },
  AddToBatchContainer: {
    paddingHorizontal: '12%',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  AddToBatchTextStyle: {fontSize: 14},
  TitleContainer: {
    marginTop: 40,
  },
  SwipeTextContainer: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: '12%',
  },
  SwipeTextStyle: {
    fontSize: BasicStyles.normalText.fontSize,
    color: '#D5D5D5',
  },
});

export default BatchBuild;
