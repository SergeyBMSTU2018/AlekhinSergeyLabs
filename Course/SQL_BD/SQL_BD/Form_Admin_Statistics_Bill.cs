using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Statistics_Bill : Form
    {
        public Form_Admin_Statistics_Bill()
        {
            InitializeComponent();
        }

        private void Admin_Statistics_Bill_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "BD_Shop_4semDataSet.Admin_Bill". При необходимости она может быть перемещена или удалена.
            this.Admin_BillTableAdapter.Fill(this.BD_Shop_4semDataSet.Admin_Bill);

            this.reportViewer1.RefreshReport();
        }
    }
}
