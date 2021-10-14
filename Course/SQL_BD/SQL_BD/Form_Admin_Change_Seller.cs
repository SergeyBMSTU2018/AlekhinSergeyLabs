using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Change_Seller : Form
    {
        public Form_Admin_Change_Seller()
        {
            InitializeComponent();
        }

        private void sellerBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            sellerTableAdapter.Update(bD_Shop_4semDataSet);
            this.Validate();
            this.sellerBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.bD_Shop_4semDataSet);
        }

        private void Form_Admin_Change_Seller_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Seller_View". При необходимости она может быть перемещена или удалена.
            this.seller_ViewTableAdapter.Fill(this.bD_Shop_4semDataSet.Seller_View);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Seller". При необходимости она может быть перемещена или удалена.
            this.sellerTableAdapter.Fill(this.bD_Shop_4semDataSet.Seller);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FAC = new Form_Admin_Change();
            FAC.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {
            seller_ViewDataGridView.DataSource = seller_Surname_SearchTableAdapter.GetData(textBox2.Text);
        }
    }
}
